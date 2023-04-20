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

    var task_num = document.getElementById('task_number').value
    if (!task_num)
    {
      task_num = 'XXXXXX'
    }

    switch (option)
    {
      case 'greeting':
        navigator.clipboard.writeText('Здравствуйте!\nДата-центр O2XYGEN свидетельствует Вам свое уважение и информирует, что по вашему обращению открыта заявка №'+ task_num +'.\nКак только по вашему запросу появится информация мы Вам сообщим.');
        break;
      case 'closed':
        navigator.clipboard.writeText('Здравствуйте!\nДата-центр O2XYGEN свидетельствует Вам свое уважение и информирует, что заявка №'+ task_num +' закрыта.\nЕсли проблема решена и у вас больше не осталось вопросов по этой заявке, можете не отвечать на это письмо.');
        break;
      case 'added':
        navigator.clipboard.writeText('Здравствуйте!\nДата-центр O2XYGEN свидетельствует Вам своё уважение и информирует о том, что по заявке №'+ task_num +' появилась дополнительная информация:\n');
        break;
      case 'transfered':
        navigator.clipboard.writeText('Здравствуйте!\nИнформация принята и передана ответственным специалистам.');
        break;
        case 'allow':
          navigator.clipboard.writeText('Здравствуйте!\nЕсли у Вас не осталось больше вопросов, можем ли мы закрыть данную заявку?');
          break;
    }
    new Toast();
}