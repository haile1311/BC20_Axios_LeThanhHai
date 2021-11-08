var service = new ProductService();
    

function getListProduct(){
    service
    .getListProductApi()
    .then(function(result){
        renderData(result.data);
    })
    .catch(function (error){
        console.log(error);
        
    });
}
getListProduct();

function renderData(data){
    var html = "";
    data.forEach(function(item){
        html += `
        <tr>
        <td>${item.id}</td>
        <td>${item.tenSP}</td>
        <td>${item.gia}</td>
        <td class="text-center">
          <img style="max-width: 100px" src="/img/${item.hinhAnh}"/>
        </td>
        <td>${item.moTa}</td>
      </tr>  
`;
});

document.getElementById("tblDanhSachSP").innerHTML = html;
}

