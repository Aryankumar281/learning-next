"use client";

import useSWR from "swr";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function SwrExample() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://dummyjson.com/products",
    fetcher,
    {
      revalidateOnFocus: true,
      refeshInterval: 1000 * 30,
      errorRetryCount: 3,
    }
  );

  const handleRefresh = () => {
    mutate();
  };
  if (isLoading) return <h1>Loading......</h1>;
  console.log(data, error, isLoading);
  return (
    <div>
      <h1>SWR example</h1>
      <button className="border bg-green-400" onClick={handleRefresh}>
        Refresh
      </button>
      <div className="flex gap-2 flex-wrap">
        {data?.products.map((product: Product) => (
          <div
            key={product.id}
            className="border w-full text-center max-w-[100px] "
          >
            <h4>{product.id}</h4>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <h3>{product.category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SwrExample;
