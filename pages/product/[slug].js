import React from "react";
import { useState } from "react";
import Wrapper from "jsonfig.json/components/Wrapper";
import ProductDetailsCarousel from "jsonfig.json/components/ProductDetails";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from "jsonfig.json/components/RelatedProduct";
import { fetchData } from "jsonfig.json/utils/api";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "jsonfig.json/store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "jsonfig.json/components/Header";
import Footer from "jsonfig.json/components/Footer";

const Details = ({ product, products }) => {
  const dispatch = useDispatch();

  const notify = () =>
    toast.success("Success. Check your cart !!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const p = product.data[0].attributes;
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  return (
    <>
      <Header />
      <div className="w-full md:py-20">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Wrapper>
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/* left column start */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              <ProductDetailsCarousel images={p.image} />
            </div>
            {/* left column end */}

            {/* right column start */}
            <div className="flex-[1] py-3">
              {/* PRODUCT TITLE */}

              <div className="text-[34px] font-semibold mb-2 leading-tight">
                <h1 className="text-sm text-red-500 font-bold">{p.Featured}</h1>
                {p.name}
              </div>

              {/* PRODUCT SUBTITLE */}
              <div className="text-lg font-semibold mb-5">{p.subtitile}</div>

              {/* PRODUCT PRICE */}
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold">MRP : RS {p.price}</p>
              </div>

              <div className="text-md font-medium text-black/[0.5]">
                incl. of taxes
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-20">
                {`(Also includes all applicable duties)`}
              </div>

              {/* PRODUCT SIZE RANGE START */}
              <div className="mb-10">
                {/* HEADING START */}
                <div className="flex justify-between mb-2">
                  <div className="text-md font-semibold">Select Size</div>
                  <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                    Select Guide
                  </div>
                </div>
                {/* HEADING END */}

                {/* SIZE START */}
                <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                  {p.size.data.map((item, i) => (
                    <div
                      key={i}
                      className={`border rounded-md text-center py-3 font-medium ${
                        item.enabled
                          ? "hover:border-black cursor-pointer"
                          : "cursor-not-allowed bg-black/[0.1] opacity-50"
                      } ${selectedSize === item.size ? "border-black" : ""}`}
                      onClick={() => {
                        setSelectedSize(item.size);
                        setShowError(false);
                      }}
                    >
                      {item.size}
                    </div>
                  ))}
                </div>

                {/* SHOW ERROR START */}
                {showError && (
                  <div className="text-red-600 mt-1">
                    Size selection is required
                  </div>
                )}
                {/* SHOW ERROR END */}
              </div>
              {/* PRODUCT SIZE RANGE END */}

              {/* ADD TO CART BUTTON START */}

              <button
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                onClick={() => {
                  if (!selectedSize) {
                    setShowError(true);
                    document.getElementById("sizesGrid").scrollIntoView({
                      block: "center",
                      behavior: "smooth",
                    });
                  } else {
                    dispatch(
                      addToCart({
                        ...product?.data?.[0],
                        selectedSize,
                        oneQuantityPrice: p.price,
                      })
                    );

                    notify();
                  }
                }}
              >
                Add to Cart
              </button>
              {/* ADD TO CART BUTTON END */}

              {/* WHISHLIST BUTTON START */}
              <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Whishlist
                <IoMdHeartEmpty size={20} />
              </button>
              {/* WHISHLIST BUTTON END */}

              <div>
                <div className="text-lg font-bold mb-5 markdown">
                  Product Details
                  <ReactMarkdown>{p.description}</ReactMarkdown>
                </div>
                <div className="markdown text-md mb-5"></div>
              </div>
            </div>
            {/* right column end */}
          </div>
          <div className="px-20">
            <RelatedProducts products={products} title={"You may also Like"} />
          </div>
        </Wrapper>
      </div>
      <Footer />
    </>
  );
};

export default Details;

export async function getStaticPaths() {
  const products = await fetchData("/api/products?populate=*");
  const paths = products?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
  const product = await fetchData(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchData(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
