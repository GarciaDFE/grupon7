const form = {
  name: document.getElementById("name"),
  phone: document.getElementById("phone"),
  email: document.getElementById("email"),
  products: document.querySelectorAll(".item-list"),
  productSelected: null,
  submit: document.getElementById("btn-submit"),
  messages: document.getElementById("form-messages"),
  $alert: document.querySelector(".alert-message")
};

form.submit.addEventListener("click", () => {
  mainFunction();
});

//**********************
// Função Principal
//**********************
const mainFunction = () => {
  cleanMessages();
  if (checkForm()) sendForm();
};

//**********************************
// Máscara de telefone para o Brasil
//**********************************
new Cleave(phone, {
  phone: true,
  phoneRegionCode: "BR"
});

//******************************
//Função para checar Formulário
//******************************
const checkForm = () => {
  const phonenumber = form.phone.value;
  const fourthNumber = phonenumber.substr(4, 1);
  let canSend = true;

  if (!form.name.value) createMessage("Nome em branco", "error");

  if (!form.phone.value) createMessage("Telefone em branco", "error");

  if (
    form.phone.value &&
    (phonenumber.length < 12 ||
      (fourthNumber === "9" && phonenumber.length === 12))
  ) {
    createMessage("Telefone inválido", "error");
    canSend = false;
  }

  if (!form.email.value) {
    createMessage("Email em branco", "error");
  } else isValidEmail = validadeEmail(form.email.value);

  getProduct();

  if (!form.productSelected) createMessage("Escolha um produto", "error");

  if (
    form.name.value &&
    form.phone.value &&
    form.email.value &&
    form.productSelected &&
    canSend
  )
    return true;
};

//******************************
//Função para enviar Formulário
//******************************
const sendForm = () => {
  const requestData = `name=${form.name.value}&phone=${
    form.phone.value
  }&email=${form.email.value}&product=${form.productSelected.value}`;
  const request = new XMLHttpRequest();

  request.onload = () => {
    let responseObject = null;

    try {
      responseObject = JSON.parse(request.responseText);
    } catch (e) {
      cleanMessages();
      createMessage("Erro de conexão, tente mais tarde", "error");
    }

    if (responseObject) {
      cleanMessages();
      createMessage("Mensagem enviada com sucesso", "check");
      redirect();
    } else {
      cleanMessages();
      createMessage("Erro de conexão, tente mais tarde", "error");
      redirect();
    }
  };

  request.open("post", "cotacao.php");
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(requestData);
};

//******************************
//Função para pegar produto
//******************************
const getProduct = () => {
  form.products.forEach(product => {
    if (product.selected === true) form.productSelected = product;
  });
};

//******************************
//Função para validar email
//******************************
const validadeEmail = email => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailFormat)) {
    return true;
  }
  return createMessage("Email inválido", "error");
};

//******************************
//Função para criar mensagem
//******************************
const createMessage = (message, type) => {
  var li = document.createElement("li");
  li.textContent = message;
  form.messages.appendChild(li);
  form.messages.style.display = "block";
  if (type == "check") {
    form.$alert.classList.add("-check");
  } else {
    form.$alert.classList.add("-error");
  }
};

//******************************
//Função para limpar mensagens
//******************************
const cleanMessages = () => {
  while (form.messages.firstChild) {
    form.messages.removeChild(form.messages.firstChild);
  }
  form.messages.style.display = "none";
  form.productSelected = null;
};

//**************************************
//Função que redireciona para a Home
//**************************************
const redirect = () => {
  setTimeout(function() {
    location.href = "../index.html";
  }, 3000);
};
