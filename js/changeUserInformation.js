function changeInfo(){
    const oldInfoInput = document.querySelector('.old-information');
    const newInfoInput = document.querySelector('.new-information');
    const editIcon = document.querySelector('.editIcon');
    var informationValue = document.querySelectorAll('.hoso-info p');
    var submitBtn = document.querySelector('.submit-save-new-information');
    var index = 0;
    var mainName = document.querySelector('.bigger-title-user-name');

    for (let i = 0; i < informationValue.length; i++) {
        informationValue[i].addEventListener('click', function() {
            // Lấy giá trị của phần tử p hiện tại và gán vào input oldInfoInput
            oldInfoInput.setAttribute('value', informationValue[i].innerText);
            // Thay đổi placeholder của input newInfoInput để hiển thị thông tin sẽ được sửa
            newInfoInput.setAttribute('placeholder', `Nhập thông tin mới cho ${this.innerText}`);
            index = i;
        });
    }
    submitBtn.addEventListener('click', function(){
        var newInfoValue = newInfoInput.value;
        // Gán giá trị mới của input newInfoInput vào phần tử p hiện tại
        // var currentP = document.querySelector('.old-information');
        // currentP.innerHTML = newInfoValue;
        informationValue[index].innerHTML = `<p>${newInfoValue}<i class="far fa-edit editIcon" data-bs-toggle="modal"
        data-bs-target="#notifyModal"></i></p>`;
        if(index === 0){
            mainName.innerHTML = newInfoValue;
        }
        
    });
}
changeInfo();



//Search
