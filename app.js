
(function() {
  
    const btn = document.querySelectorAll('.btn');
    const customerName = document.querySelector('.name');
    const customerText = document.querySelector('.message');
    const customers = [];
    var index = 0;

    class Customer {
        constructor(name, message) {
            this.name = name;
            this.message = message;
        }
    }

    function createCustomer(name,message){
        let customer = new Customer(name,message);
        customers.push(customer);
    }
    createCustomer('John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neqt laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCustomer('Zeeshan Ahmad', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque repreheciis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCustomer('Amir Hayat', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCustomer('Hamiad Ashraf', 'Lorem ipsum dolor sit amet consectetur adipisicing eliciis neque reprehet. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCustomer('Furqan khan', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')





    btn.forEach(function(btns){
        btns.addEventListener('click',function(e){
            if(e.target.parentElement.classList.contains('btn-left')){
                if (index === 0) {
                    index = customers.length
                }
                index--
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].message;
            
                   
            }
            if(e.target.parentElement.classList.contains('btn-right')){
                index++
                if (index === customers.length) {
                    index = 0
                }
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].message;
            }
        })
    })
   

})();
