"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LoadingBars } from "../../components/punk-society/LoadingBars";
import { NewsFeed } from "../../components/punk-society/NewsFeed";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";
import { getMetadataFromIPFS } from "~~/utils/simpleNFT/ipfs-fetch";
import { NFTMetaData } from "~~/utils/simpleNFT/nftsMetadata";

export interface Post extends Partial<NFTMetaData> {
  nftAddress?: string;
  postId?: number;
  uri: string;
  user: string;
  price: string;
  amount: string;
  date?: string;
}

export const Explore = () => {
  const [articles, setArticles] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(0);

  const observer = useRef<IntersectionObserver | null>(null);

  const {
    data: createEvents,
    // isLoading: createIsLoadingEvents,
    // error: createErrorReadingEvents,
  } = useScaffoldEventHistory({
    contractName: "BasedShop",
    eventName: "ArticleCreated",
    fromBlock: 0n,
    watch: true,
  });

  const fetchArticles = useCallback(
    async (page: number) => {
      if (!createEvents) return;

      setLoadingMore(true);
      try {
        // Calculate the start and end indices for the current page
        const start = (page - 1) * 8;
        const end = page * 8;
        const eventsToFetch = createEvents.slice(start, end);

        const articlesUpdate: Post[] = [];

        for (const event of eventsToFetch) {
          try {
            const user = event.args?.user;
            const tokenURI = event.args?.tokenURI;
            const date = event.args?.date;
            const price = event.args?.price;
            const amount = event.args?.amount;

            if (!tokenURI) continue;

            const ipfsHash = tokenURI.replace("https://ipfs.io/ipfs/", "");
            const nftMetadata: NFTMetaData = await getMetadataFromIPFS(ipfsHash);

            articlesUpdate.push({
              postId: parseInt(event.args?.articleId?.toString() ?? "0"),
              uri: tokenURI,
              user: user || "",
              price: price?.toString() || "",
              amount: amount?.toString() || "",
              date: date?.toString() || "",
              ...nftMetadata,
            });
          } catch (e) {
            notification.error("Error fetching articles");
            console.error(e);
          }
        }

        setArticles(prevArticles => [...prevArticles, ...articlesUpdate]);
      } catch (error) {
        notification.error("Failed to load articles");
      } finally {
        setLoadingMore(false);
      }
    },
    [createEvents],
  );

  useEffect(() => {
    setLoading(true);
    fetchArticles(page).finally(() => setLoading(false));
  }, [page, fetchArticles]);

  const lastPostElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loadingMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setPage(prevPage => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadingMore],
  );

  if (loading && page === 0) {
    return (
      <>
        <LoadingBars />
      </>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <NewsFeed articles={articles} />
      <div ref={lastPostElementRef}></div>
      {loadingMore && <LoadingBars />}
    </div>
  );
};
