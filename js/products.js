
document.querySelector(".username").textContent = JSON.parse(localStorage.getItem("user")).username
let elProductTable = document.querySelector(".product-table")

let elModalWrapper = document.querySelector(".modal-wrapper")
let elModalInner = document.querySelector(".modal-inner")

let productsList = JSON.parse(localStorage.getItem("products")) || []

// Modal Case
elModalWrapper.addEventListener("click",(e) => e.target.id == "wrapper" && elModalWrapper.classList.add("scale-0"))
// Modal Case

let elCategory1 = document.querySelector(".category-1")
let elCategory2 = document.querySelector(".category-2")

elCategory1.addEventListener("click", () => {
    elCategory1.className = "category-1 font-bold text-[35px] leading-[40px] pb-[8px] text-[#009398] border-b-[3px] cursor-pointer border-[#009398]"
    elCategory2.className = "category-2 font-bold text-[35px] leading-[40px] pb-[8px] text-[#A6A6A6] border-b-[3px] cursor-pointer border-transparent"
    renderProducts(productsList, elProductTable, "0")
})

elCategory2.addEventListener("click", () => {
    elCategory2.className = "category-2 font-bold text-[35px] leading-[40px] pb-[8px] text-[#009398] border-b-[3px] cursor-pointer border-[#009398]"
    elCategory1.className = "category-1 font-bold text-[35px] leading-[40px] pb-[8px] text-[#A6A6A6] border-b-[3px] cursor-pointer border-transparent"
    renderProducts(productsList, elProductTable, "1")
})




