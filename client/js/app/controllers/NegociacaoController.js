class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();

        let data = new Date(this._inputData.value.replace(/-/g, ','));
        console.log(data);

        // console.log(typeof(this._inputData.value));
        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );

        // console.log(negociacao);
    }
}