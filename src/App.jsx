import { useState } from "react";
import "./App.css";
import marizImage from "./assets/marizz.png";

const message = [
  `الي حبيبتي ماريز ❤️`,

  `يااااه عدي ١٥٠ يوم و احنا سوا مش عارف عدوا ازاي بس كانوا احلي ايام حياتي معاكي، الصراحه مش بعرف اوصف شعوري معاكي خالص بس انا مطمن و مبسوط انك موجوده في حياتي.`,

  `يمكن ساعات بنتخانق ساعات بنمسك في بعض علي حاجات تافهه، ساعات أنا بتغابي ساعات أنا بتغابي برضوا 😂، المهم انه بعد ده كله بنفضل سوا بنتعاتب و نتصافي سوا و نفضل ماريز و مكسيموس.`,

  `اكيد طبعا أنا عصبي شويه و بمسك علي حاجات تافهه شويه بس انا بحب انك بتاعتي و معايا و محدش يشاركني فيكي خالص و لا يبصلك حتي، عارفه لما بشوفك يمكن أنا مش ببين بس عيني كل مره تفضحني ببقي عايز اخدك من ايدك و نلف و نقعد ٢٤ ساعه سوا و اعتقد مش هيكفوا.`,

  `أنا بتحرك عشانك انتي و عشانك و بس عشان ابقي قد وعدي و بحاول اشوف من هنا علي هنا عشان بس اكون معاكي و نكون سوا و تبقي ريتا موجوده 😂♥️.`,

  `أحنا بقالنا فتره الدنيا مش ظابطه بس اللي متاكد منه أننا هنخرج منها سوا و مع بعض.`,

  `حبيت اقولك اني بحبك جدا و كل مره عيني و مشاعري و احساسي مش بقدر اخبيها عليكي و لا اقدر اخبي خوفي عليكي، لما بتتعبي ببقي عايز الأرض تنشف و تخليني جمبك عشان اراعيكي.`,

  `لما حد يكلمك مش كويس ببقي عايز ادفنه مكانه، لما بتبقي تايه في مكان بسال نفسي انت ليه مش معاها.`,

  `أنا عارف اني اتكلمت كثير بس اكيد الكلام مش كفايه و أن شاء الله مع الوقت هتلاقي الافعال هي اللي بتتكلم.`,

  `بحبك جدا يا ماروزتي و شكرا انك في حياتي. ❤️`,

  `توقيع بطاطس 😘♥️`
];

function Hearts() {
  const hearts = Array.from({ length: 28 });

  return (
    <div className="hearts-container">
      {hearts.map((_, index) => (
        <span
          key={index}
          className="floating-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 7}s`,
            fontSize: `${12 + Math.random() * 25}px`,
            opacity: 0.25 + Math.random() * 0.55
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="app">
      <Hearts />

      {/* glowing particles */}
      <div className="particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {!opened ? (
        <section className="landing">
          <div className="intro">
            <div className="small-heart">♥</div>

            <h1>جواب ليكي يا ماريز</h1>

            <p>
              فيه حاجة صغيرة مستنياكي جوا...
              <br />
              دوسي على الجواب وافتحيه ❤️
            </p>
          </div>

          <div
            className="envelope-wrapper"
            onClick={() => setOpened(true)}
          >
            <div className="shadow" />

            <div className="envelope">
              <div className="envelope-back" />

              <div className="letter-preview">
                <span>إلى حبيبتي</span>
                <strong>ماريز ❤️</strong>
              </div>

              <div className="envelope-front left" />
              <div className="envelope-front right" />
              <div className="envelope-front bottom" />

              <div className="heart-seal">
                ♥
              </div>
            </div>

            <div className="click-text">
              افتحي الجواب ❤️
            </div>
          </div>
        </section>
      ) : (
        <section className="letter-page">
          <button
            className="close-button"
            onClick={() => setOpened(false)}
          >
            ×
          </button>

          <div className="paper">
            <div className="paper-decoration top">
              ♥　♡　♥
            </div>

            <div className="letter-content">
              {message.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? "letter-title"
                      : index === message.length - 1
                      ? "signature"
                      : ""
                  }
                  style={{
                    animationDelay: `${index * 0.12}s`
                  }}
                >
                  {paragraph}
                </p>
              ))}

              {/* الصورة اللي هتبعتها بعدين */}
<div className="final-photo">
  <img
    src={marizImage}
    alt="Mariz"
  />
</div>
              <div className="final-hearts">
                ♥ ♥ ♥
              </div>
            </div>

            <div className="paper-decoration bottom">
              ♥　♡　♥
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;