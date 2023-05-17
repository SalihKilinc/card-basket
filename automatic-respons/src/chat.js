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
        case 'Benim bir sorum olacakti':
          robotAnswer = ' Merhaba size nasıl yardımcı olabilirim?';
          break;
        case 'Urunu iade etmek istiyorum' :
          robotAnswer = 'Ürün iade süreci hakkında bilgi almak için lütfen şu sayfayı ziyaret edin...';
          break;
        case 'Siparis teslim tarihi nedir':
          robotAnswer = 'Siparişinizin teslim tarihi şu tarihte olacak...';
          break;
        case 'Fatura bilgilerimi duzenlemek istiyorum':
          robotAnswer = 'Fatura bilgilerinizi düzeltmek için şu formu doldurmanız gerekiyor...';
          break;
        case '':
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
