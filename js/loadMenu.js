var listOfNoodle = [
    {
        nameProduct: 'Mì kim chi bò',
        linkImage: '../../img/Mi/MKCB.jpg',
        linkDetailProduct: '../Product/mkc_bo-product.html',
        priceProduct: '34,000₫'
    },
    {
        nameProduct: 'mì kim chi bò mỹ',
        linkImage: '../../img/Mi/MKCBM.jpg',
        linkDetailProduct: '../Product/mkc_bomy-product.html',
        priceProduct: '49,000₫'
    },
    {
        nameProduct: 'mì kim chi cá',
        linkImage: '../../img/Mi/MKCC.jpg',
        linkDetailProduct: '../Product/mkc_ca-product.html',
        priceProduct: '45,000₫'
    },
    {
        nameProduct: 'mì kim chi thập cẩm',
        linkImage: '../../img/Mi/MKCTCAM.jpg',
        linkDetailProduct: '../Product/mkc_thapcam-product.html',
        priceProduct: '54,000₫'
    }
    
];

var listOfNoodleThaiHotPot = [
    {
        nameProduct: 'mì lẩu thái bò',
        linkImage: '../../img/Mi/MLTB.jpg',
        linkDetailProduct: '../Product/mlt_bo-product copy.html',
        priceProduct: '34,000₫'
    },
    {
        nameProduct: 'mì lẩu thái gà',
        linkImage: '../../img/Mi/MLTG.jpg',
        linkDetailProduct: '../Product/mlt_ga-product.html',
        priceProduct: '30,000₫'
    },
    {
        nameProduct: 'mì lẩu thái bạch tuộc',
        linkImage: '../../img/Mi/MLTBT.jpg',
        linkDetailProduct: '../Product/mlt_bachtuoc-product.html',
        priceProduct: '37,000₫'
    },
    {
        nameProduct: 'Mì lẩu thái thập cẩm',
        linkImage: '../../img/Mi/MLTC.jpg',
        linkDetailProduct: '../Product/mlt_thapcam-product.html',
        priceProduct: '99,000₫'
    }
];

var listOfKimChiHotPot = [
    {
        nameProduct: 'lẩu kim chi bạch tuộc',
        linkImage: '../../img/Lau/LKCBTN.jpg',
        linkDetailProduct: '../Product/lkc_bachtuoc-product.html',
        priceProduct: '239,000₫'
    }
];

var listOfThaiHotPot = [
    {
        nameProduct: 'Lẩu thái hải sản',
        linkImage: '../../img/Lau/LTHSL.jpg',
        linkDetailProduct: '../Product/lt_haisan-product.html',
        priceProduct: '210,000₫'
    }
];

var listOfBibimbap = [
    {
        nameProduct: 'bibimbap bò',
        linkImage: '../../img/ComTron/BBB.jpg',
        linkDetailProduct: '../Product/mtr_bibimbapbo-product.html',
        priceProduct: '55,000₫'
    },
    {
        nameProduct: 'Bibimbap',
        linkImage: '../../img/ComTron/Originals/BB.jpg',
        linkDetailProduct: '../Product/mtr_bibimbap-product.html',
        priceProduct: '55,000₫'
    }
];

var listOfDrink = [
    {
        nameProduct: 'Nước ép táo',
        linkImage: '../../img/Nuoc/NETAO.jpg',
        linkDetailProduct: '../Product/du_nuoceptao-product.html',
        priceProduct: '55,000₫'
    },
    {
        nameProduct: 'Nước gạo',
        linkImage: '../../img/Nuoc/Nuocgao.jpg',
        linkDetailProduct: '../Product/du_nuocgao-product.html',
        priceProduct: '23,000₫'
    },
    {
        nameProduct: 'rượu soju',
        linkImage: '../../img/Nuoc/Ruousoju.jpg',
        linkDetailProduct: '../Product/du_ruousoju-product.html',
        priceProduct: '180,000₫'
    }

];

var listOfProductP2 = [
    {
        nameProduct: 'Kimbap',
        linkImage: '../../img/AnVat/KB.jpg',
        linkDetailProduct: '../Product/dav_kimbap-product.html',
        priceProduct: '45,000₫'
    },
    {
        nameProduct: 'Há cảo chiên',
        linkImage: '../../img/AnVat/Hcc.jpg',
        linkDetailProduct: '../Product/dav_hcc-product.html',
        priceProduct: '35,000₫'
    },
    {
        nameProduct: 'Trà trái cây',
        linkImage: '../../img/Nuoc/Seoul-drink03242-1.jpg',
        linkDetailProduct: '../Product/du_tratraicay-product.html',
        priceProduct: '30,000₫'
    },
    {
        nameProduct: 'Tokbokki truyền thống',
        linkImage: '../../img/AnVat/Tokbokki/Seoul 201421.jpg',
        linkDetailProduct: '../Product/dav_TBKtruyenthong-product.html',
        priceProduct: '99,000₫'
    },
    {
        nameProduct: 'Bánh cuộn chiên',
        linkImage: '../../img/AnVat/BTTHS.jpg',
        linkDetailProduct: '../Product/dav_bcc-product.html',
        priceProduct: '35,000₫'
    },
    {
        nameProduct: 'Tokbokki phô mai',
        linkImage: '../../img/AnVat/Tokbokki/TBLPM.jpg',
        linkDetailProduct: '../Product/dav_TBKphomai-product.html',
        priceProduct: '25,000₫'
    }
];

var totalProduct = listOfNoodle.concat(listOfNoodleThaiHotPot, listOfKimChiHotPot, listOfThaiHotPot, listOfBibimbap, listOfDrink);
function renderProduct(productInMenu){
    var firstpage = productInMenu.map(function(product1)
    {
        return `
        <div class="col-3 product_content_items">
                <div class="card">
                    <div class="product_content__img"><a href="${product1.linkDetailProduct}"><img src="${product1.linkImage}"
                                class="card-img-top" alt="..."></a>
                    </div>
                    <div class="card-body ">
                        <h5 class="card-title">${product1.nameProduct}</h5>
                        <p class="card-text">${product1.priceProduct}</p>
                        <a href="#" class="btn" data-bs-toggle="modal" data-bs-target="#Modalcheck-user">Đặt món</a>
                    </div>
                </div>
            </div>
        `
    });
    // product.innerHTML = firstpage.join('');
    // document.querySelector('.product__pagination').style.display = "none";

    if(productInMenu === listOfNoodle 
        || productInMenu === listOfNoodleThaiHotPot || 
        productInMenu === listOfThaiHotPot ||
         productInMenu === listOfBibimbap ||
         productInMenu === listOfDrink ||
         productInMenu === listOfKimChiHotPot)
    {
        product.innerHTML = firstpage.join('');
        document.querySelector('.product__pagination').style.display = "none";
    }else{
        if(productInMenu === listOfProductP2){
            var P1 = document.querySelector('.menu-page-1');
            P1.classList.remove('active');
            var P2 = document.querySelector('.menu-page-2');
            P2.classList.add("active");
            product.innerHTML = firstpage.join('');
        }
    }
}

 //SORT
 function sortList(productInMenu){
    var sortOption = document.querySelector('.form-select');
    console.log(sortOption);
    sortOption.addEventListener("change", function(){
    const selectedValue = this.value;
    console.log(selectedValue);
    if(selectedValue === "2"){
        sortByPriceLowToHigh(productInMenu);
    }else{
        if(selectedValue === "3"){
            sortByPriceHighToLow(productInMenu);
        }else{
            if(selectedValue === "4"){
                sortByAToZ(productInMenu);
            }else{
                if(selectedValue === "5"){
                    sortByZToA(productInMenu);
                }
            }
        }
    }
 } 
 );
 }
//  var sortOption = document.querySelector('.form-select');
//  sortOption.addEventListener("onchange", function sortList(productInMenu){
//     const selectedValue = this.value;
//     console.log(selectedValue);
//     if(selectedValue === "2"){
//         sortByPriceLowToHigh(productInMenu);
//     }else{
//         if(selectedValue === "3"){
//             sortByPriceHighToLow(productInMenu);
//         }else{
//             if(selectedValue === "4"){
//                 sortByAToZ(productInMenu);
//             }else{
//                 if(selectedValue === "5"){
//                     sortByZToA(productInMenu);
//                 }
//             }
//         }
//     }
//  } 
//  );
function changeSortArray(productInMenu){
    sortList(productInMenu);
    console.log(productInMenu);
}


// var sortOption = document.querySelector('.form-select');
// sortOption.addEventListener("onchange", function sortList(productInMenu){
//     const selectedValue = this.value;
//     if(selectedValue === "2"){
//         sortByPriceLowToHigh(productInMenu);
//     }else{
//         if(selectedValue === "3"){
//             sortByPriceHighToLow(productInMenu);
//         }else{
//             if(selectedValue === "4"){
//                 sortByAToZ(productInMenu);
//             }else{
//                 if(selectedValue === "5"){
//                     sortByZToA(productInMenu);
//                 }
//             }
//         }
//     }
// }
// );
function sortByPriceLowToHigh(productInMenu){
    productInMenu.sort(function(a, b) {
        const priceA = parseInt(a.priceProduct.replace(",", ""));
        const priceB = parseInt(b.priceProduct.replace(",", ""));
        return priceA - priceB;
      });
      renderProduct(productInMenu);
}
function sortByPriceHighToLow(productInMenu){
    productInMenu.sort(function(a, b) {
        const priceA = parseInt(a.priceProduct.replace(",", ""));
        const priceB = parseInt(b.priceProduct.replace(",", ""));
        return priceB - priceA;
      });
      renderProduct(productInMenu);
}
function sortByAToZ(productInMenu){
    productInMenu.sort(function(a, b){
        const nameA = a.nameProduct.charAt(0).toUpperCase();
        const nameB = b.nameProduct.charAt(0).toUpperCase();
        if(nameA < nameB){
            return -1;
        }
        if(nameA > nameB){
            return 1;
        }
        return 0;
    });
    renderProduct(productInMenu);
}
function sortByZToA(productInMenu){
    productInMenu.sort(function(a, b){
        const nameA = a.nameProduct.charAt(0).toUpperCase();
        const nameB = b.nameProduct.charAt(0).toUpperCase();
        if(nameA < nameB){
            return 1;
        }
        if(nameA > nameB){
            return -1;
        }
        return 0;
    });
    renderProduct(productInMenu);
}



