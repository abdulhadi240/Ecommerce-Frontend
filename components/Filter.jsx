import React ,{useState} from 'react'
import { BiCheck, BiLeftArrow, BiLeftArrowAlt, BiFilterAlt } from "react-icons/bi";


let api;

const Filter = () => {
    

    const [lessapikey, setLessApikey] = useState("");
    const [featuredapikey, setFeaturedApikey] = useState("");
    const [stockapikey, setStockApikey] = useState("");
    const [sortapikey, setSortApikey] = useState("");

     api =`${lessapikey}${featuredapikey}${stockapikey}${sortapikey}`;
   

    
    const [btnF, setBtnF] = useState(false);
    const [btnB, setBtnB] = useState(false);
    const [btnJ, setBtnJ] = useState(false);
    const [btnP, setBtnP] = useState(false);
    const [stockI, setStockI] = useState(false);
    const [stockO, setStockO] = useState(false);
    const [sortA, setSortA] = useState(false);
    const [sortD, setSortD] = useState(false);
    const [value, setValue] = useState(0);




    function handleChange(event) {
        setValue(event.target.value);
        Less(event.target.value)
      }

      
    
      function Less(key) {
        setLessApikey(`&[filters][price][$lte]=${key}`);
      }
    
      function Stock(B) {
        setStockApikey(`&[filters][Stock][$eq]=${B}`);
      }
    
      function Featured(name) {
        setFeaturedApikey(`&[filters][Featured][$eq]=${name}`);
      }
    
      function Sorting(name) {
        setSortApikey(`&sort[0]=price%3A${name}`);
      }



  return (
    <div>
        <div className="mt-72 z-0 relative h-auto w-[370px] sm:ml-32 sm:overflow-hidden lg:-mt-4 lg:transition-all ml-[2px] sm:w-[450px] bg-gray-50  lg:bg-white lg:h-auto  lg:mt-8 lg:w-[330px] lg:-ml-20">
                <div className="flex justify-between mt-3 rounded-xl mx-2">
                  <BiLeftArrowAlt className="text-lg lg:hidden" onClick={() => { setFilter(false) }} />
                  <div className="text-center">Filter Products</div>
                  <div className=" cursor-pointer  hover:text-sm hover:text-center text-red-500 font-bold " onClick={() => {
                    setBtnF(false);
                    setBtnB(false);
                    setBtnJ(false);
                    setBtnP(false);
                    setStockI(false)
                    setStockO(false)
                    setSortA(false)
                    setSortD(false)
                    setValue(0)
                    setFeaturedApikey("");
                    setStockApikey("");
                    setSortApikey("");
                  }}>
                    Reset
                  </div>
                </div>


                <div className="mt-6 ">
                  <h1 className="mb-6 ml-4  text-xl">Featured</h1>
                  <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 ml-4 justify-center">
                    {btnF ? (
                      <>
                        <div
                          className="cursor-pointer bg-black text-white text-xs justify-starts p-1  rounded-md  h-auto w-full   flex gap-2 "
                          onClick={() => {
                            setBtnF(false);
                          }}
                        >
                          <BiCheck className="text-lg text-center -mt-[2px]" />
                          Featured
                        </div>

                      </>
                    ) : (
                      <div
                        className="cursor-pointer bg-white border-black  text-xs p-1  rounded-md h-auto w-auto text-center border-[1px] "
                        onClick={() => {
                          Featured("FEATURED");
                          setBtnF(true);
                          setBtnB(false);
                          setBtnP(false);
                          setBtnJ(false);
                        }}
                      >
                        Featured
                      </div>
                    )}

                    {btnB ? (
                      <div
                        className="cursor-pointer bg-black text-white text-xs p-1  rounded-md  h-auto w-auto  flex gap-2 justify-start"
                        onClick={() => {
                          Featured("");
                          setBtnB(false);
                        }}
                      >
                        <BiCheck className="text-lg text-center -mt-[2px]" />
                        Best Seller
                      </div>
                    ) : (
                      <div
                        className="cursor-pointer bg-white border-black  text-xs p-1  rounded-md  h-auto w-auto  text-center border-[1px]  "
                        onClick={() => {
                          Featured("BEST SELLER");
                          setBtnB(true);
                          setBtnF(false);
                          setBtnP(false);
                          setBtnJ(false);
                        }}
                      >
                        Best Seller
                      </div>
                    )}

                    {btnP ? (
                      <div
                        className="cursor-pointer bg-black text-white text-xs p-1  rounded-md  h-auto w-auto    flex gap-2 justify-start"
                        onClick={() => {
                          setBtnP(false);
                        }}
                      >
                        <BiCheck className="text-lg text-center -mt-[2px]" />
                        Premium
                      </div>
                    ) : (
                      <div
                        className="cursor-pointer bg-white border-black  text-xs p-1  rounded-md  h-auto w-auto  text-center border-[1px]  mr-2"
                        onClick={() => {
                          Featured("PREMIUM");
                          setBtnP(true);
                          setBtnB(false);
                          setBtnF(false);
                          setBtnJ(false);
                        }}
                      >
                        Premium
                      </div>
                    )}

                    {btnJ ? (
                      <div
                        className="cursor-pointer bg-black text-white text-xs p-1  rounded-md  h-auto w-auto    flex gap-2 justify-start"
                        onClick={() => {
                          setBtnJ(false);
                        }}
                      >
                        <BiCheck className="text-lg text-center -mt-[2px]" />
                        Just In
                      </div>
                    ) : (
                      <div
                        className="cursor-pointer bg-white border-black  text-xs p-1  rounded-md  h-auto w-auto  text-center border-[1px]  "
                        onClick={() => {
                          Featured("JUST IN");
                          setBtnJ(true);
                          setBtnP(false);
                          setBtnB(false);
                          setBtnF(false);
                        }}
                      >
                        Just In
                      </div>
                    )}
                  </div>
                  <div className="h-[1px] w-full mt-7 bg-black/10" />
                  <div className="mt-4 ml-4">
                    <h1 className="mb-3 text-xl">Stock</h1>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 ml-4 justify-center">
                    {stockI ? (
                      <div
                        className="cursor-pointer bg-black text-white    flex gap-2 justify-start w-20 border-[1px] rounded-md p-1 text-xs  text-center border-black "
                        onClick={() => {
                          setStockI(false);
                        }}
                      >
                        <BiCheck className="text-lg text-center -mt-[2px]" />
                        In Stock
                      </div>
                    ) : (
                      <div
                        className="w-20 border-[1px] rounded-md p-1 text-xs bg-white text-center border-black "
                        onClick={() => {
                          Stock(true);
                          setStockI(true);
                          setStockO(false);
                        }}
                      >
                        In Stock
                      </div>
                    )}

                    {stockO ? (
                      <div
                        className="cursor-pointer bg-black text-white   h-auto flex  gap-1 ml-2 justify-start w-24 border-[1px] rounded-md p-1 text-xs  text-center border-black "
                        onClick={() => {
                          setStockO(false);
                        }}
                      >
                        <BiCheck className="text-lg text-center -mt-[2px]" />
                        Out Of Stock
                      </div>
                    ) : (
                      <div
                        className="w-24 border-[1px] ml-2 p-1 rounded-md text-xs text-center bg-white border-black "
                        onClick={() => {
                          Stock(false);
                          setStockO(true);
                          setStockI(false);
                        }}
                      >
                        Out Of Stock
                      </div>
                    )}

                  </div>
                  <div className="h-[1px] w-full mt-7 bg-black/10" />
                  <div className="mt-8 text-lg ml-4 flex justify-between  w-[320px] sm:w-[420px] lg:w-[250px] ">
                    <h1>Price Range</h1>
                    <output className="">$0 - ${value}</output>
                  </div>
                  <div className="mt-3 ml-4">

                    <input
                      type="range"
                      min="0"
                      max="150"
                      step="10"
                      value={value}
                      onChange={handleChange}
                      className="w-full appearance-none h-2  rounded-md bg-black"
                    />
                  </div>
                  <div className="h-[1px] w-full mt-7 bg-black/10" />

                  <div className="mt-8 text-xl ml-4">Sort</div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 ml-4 mt-3 justify-center">
                    {sortA ? (
                      <div
                        className="cursor-pointer bg-black text-white   h-auto flex  gap-1 ml-2 justify-start w-24 border-[1px] rounded-md p-1 text-sm  text-center border-black"
                        onClick={() => {
                          setSortA(false);
                        }}
                      >
                        <BiCheck className="text-lg text-center " />
                        Ascending
                      </div>
                    ) : (
                      <div
                        className="w-20 border-[1px] ml-2 p-1 rounded-md text-sm text-center bg-white border-black   "
                        onClick={() => {
                          Sorting("asc");
                          setSortA(true);
                          setSortD(false);
                        }}
                      >
                        Ascending
                      </div>
                    )}

                    {sortD ? (
                      <div
                        className="cursor-pointer bg-black text-white   h-auto flex  gap-1 ml-4 justify-start w-24 border-[1px] rounded-md p-1 text-sm  text-center border-black"
                        onClick={() => {
                          setSortD(false);
                        }}
                      >
                        <BiCheck className="text-lg text-center " />
                        Descending
                      </div>
                    ) : (
                      <div
                        className="w-24 border-[1px] ml-8 p-1 rounded-md text-sm text-center bg-white border-black  m "
                        onClick={() => {
                          Sorting("desc");
                          setSortD(true);
                          setSortA(false);
                        }}
                      >
                        Descending
                      </div>
                    )}
                  </div>
                </div>
                {/* <button className="p-2 bg-black text-white w-full h-auto text-center mt-16 rounded-lg hover:bg-black/95 mb-10"> Matching Result {data?.data?.length}</button> */}
              </div>
            
    </div>
  )
}

export  {Filter , api}