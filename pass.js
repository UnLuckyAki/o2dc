class Toast {
    constructor(){
      this.message = 'Скопировано';
      this.time = 2000;
      this.element = null;
      var element = document.createElement('div');
      element.className = "toast-notification";
      this.element = element;
      var countElements = document.getElementsByClassName("toast-notification");
      
      element.style.opacity=0.9;
      
      element.style.marginTop = (countElements.length * 40) + "px";
      
      
      var message = document.createElement("div");
      message.className = "message-container";
      message.textContent = this.message;
      
      element.appendChild(message);
      
      var close = document.createElement("div");
      close.className = "close-notification";
      
      var icon = document.createElement("i");
      icon.className = "lni lni-close";
      close.appendChild(icon);
      element.append(close);
      
      document.body.appendChild(element);
      
      setTimeout(() => {
        element.style.opacity = '0';
      }, this.time);
      element.addEventListener('transitionend', () => element.remove());
    }
  }


  function theFunction(option) {
    var company = document.getElementById('task_company').value;
    var fromdate = document.getElementById('fromdate').value.split('-').reverse().join('.');
    var todate = document.getElementById('todate').value.split('-').reverse().join('.');
    var date;
    

    switch (option)
    {
      case 'companydate':
        if (company == "") {
            alert("Укажи КОМПАНИЮ");
            exit;}
        else if (fromdate == ""){
            alert("Укажи Дата");
            exit;
        }
        if ((!todate) || (fromdate==todate)) {
            date = fromdate.slice(0,6)+fromdate.slice(8,10);
        } else {
            date=fromdate.slice(0,6)+fromdate.slice(8,10) +'-'+ todate.slice(0,6)+todate.slice(8,10);
        }
        navigator.clipboard.writeText('ПРОПУСК В ЦОД | '+date+' | '+company);
        new Toast();
        break;
      case 'clear':
        document.getElementById('task_company').value = '';
        document.getElementById('fromdate').value = '';
        document.getElementById('todate').value = '';
    }
    
}
