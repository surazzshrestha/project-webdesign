import Header from "./componenet/layouts/Header"
import Cate from "./componenet/category/Cate"
import Footer from "./componenet/layouts/Footer"




function App() {
  return (
    <>
      <Header />
      <section className="my-5 container">
        <p className="text-center">MADE THE HARD WAY</p>
        <h2 className="text-center">FEATURED CATEGORIES</h2>

        <p className="text-center">
          Basel & Co. is a powerful eCommerce theme for WordPress. Visit our shop page to see all main features for Your Store
        </p>

        <div className="category-wrapper">
          <Cate />
        </div>

        </section>
      <Footer />


    </>
  )
}

export default App
