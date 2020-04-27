import React,{ useState } from "react";

function MorningZ() {
    const [counter, setCounter] = useState(0)
    const handleOnClick = () =>{
        setCounter(counter + 1)
    }
    const handleReset = () =>{
        setCounter(0)
    }
  return (
    <div>
      <h1>সকালের যিকির</h1>
      <h3>
        – سبحان الله و بحمده – Subhaan-Allahi wa bihamdihi [Allaah is free from
        imperfection and all praise is due to Him][আল্লাহ অপূর্ণতা থেকে
        মুক্ত,সকল ইবাদত শুধু মাত্র তারই জন্য]
      </h3>

      <h3>
        – سبحان الله العظيم – Subhaan-Allahil-Azhim [Allaah is free from
        imperfection, The Greatest][ আল্লাহ অপূর্ণতা থেকে মুক্ত,আল্লাহ
        সর্বশ্রেষ্ঠ]
      </h3>
      <p>
        ১০০ বার পড়তে হবে 
      </p>

      <button onClick={handleOnClick}style={{
          background: 'transparent'
      }}>তাসবীহ</button>
      <button onClick={handleReset}style={{
          background: 'transparent'
      }}>পুনরায় শুরু</button>
        <h1>{counter}</h1>
        <p>{counter >= 100 ? '১০০ বার পড়া সম্পন্ন হইয়েছে' : null}</p>
    </div>
  );
}

export default MorningZ;
