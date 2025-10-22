// server component by default
// u can fetch data inside a server component
// u can access the backend resource directly
// keep sensitive info in the server side
// not to be exposed on the client side

// you can not
// use hooks
// add events
// inside a server component 
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>This is our homePage</h1>
    </div>
  );
}