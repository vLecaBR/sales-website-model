import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditProduct({ productId }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [conteudoCaixa, setConteudoCaixa] = useState([]);
  const [image, setImage] = useState('');

  // Carregar os dados do produto para edição
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${productId}`);
        const product = response.data;
        
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setConteudoCaixa(product.conteudoCaixa || []);
        setImage(product.image);
      } catch (error) {
        console.error('Erro ao buscar produto para edição:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  // Manipulador de alteração no campo 'conteudoCaixa'
  const handleConteudoCaixaChange = (e) => {
    const value = e.target.value;
    setConteudoCaixa(value ? value.split(',') : []); // Transformar string separada por vírgulas em array
  };

  // Enviar o formulário de edição
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        name,
        price,
        description,
        conteudoCaixa,
        image
      };

      // Enviar os dados atualizados para o backend
      const response = await axios.put(`http://localhost:5000/api/products/${productId}`, productData);
      console.log('Produto atualizado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Conteúdo da Caixa (separado por vírgulas)"
        value={conteudoCaixa.join(', ')} // Exibe como string separada por vírgulas
        onChange={handleConteudoCaixaChange}
      />
      <input
        type="text"
        placeholder="Imagem (URL)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Atualizar Produto</button>
    </form>
  );
}

export default EditProduct;
