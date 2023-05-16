import React, { useState } from 'react';

const CustomerServiceRobot = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput !== '') {
      const userQuestion = userInput.trim();
      let robotAnswer;

      switch (userQuestion) {
        // eslint-disable-next-line no-unused-expressions
        case 1 :'Nasıl yardımcı olabilirim?'
          robotAnswer = 'Size nasıl yardımcı olabilirim?';
          break;
        // eslint-disable-next-line no-unused-expressions
        case 2:'Ürün iade süreci nasıl işliyor?'
          robotAnswer = 'Ürün iade süreci hakkında bilgi almak için lütfen şu sayfayı ziyaret edin...';
          break;
        // eslint-disable-next-line no-unused-expressions
        case 3 : 'Siparişim ne zaman teslim edilecek?'
          robotAnswer = 'Siparişinizin teslim tarihi şu tarihte olacak...';
          break;
        // eslint-disable-next-line no-unused-expressions
        case 4:'Fatura bilgilerimde bir yanlışlık var. Ne yapabilirim?'
          robotAnswer = 'Fatura bilgilerinizi düzeltmek için şu formu doldurmanız gerekiyor...';
          break;
        // eslint-disable-next-line no-unused-expressions
        case 5: 'Başka bir soru?'
          robotAnswer = 'Size nasıl yardımcı olabilirim?';
          break;
        default:
          robotAnswer = 'Ürün iade süreci hakkında bilgi almak için lütfen şu sayfayı ziyaret edin...';
          break;
      }

      setResponse(robotAnswer);
      setUserInput('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleUserInput} />
        <button type="submit">Gönder</button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default CustomerServiceRobot;
