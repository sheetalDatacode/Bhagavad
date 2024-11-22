import Card from "react-bootstrap/Card";
import banner2 from "./images/banner2.png";
import "./Bhagavad.css";
import "./Quotes.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
const Bhagawat = () => {
  const Chapters = [
    {
      title: "Chapter 1 ",
      subtitle: " Arjuna Visada Yoga",
      text: "The first chapter of the Bhagavad Gita - Arjuna Visada Yoga .Introduces the setup,the setting,the characters and circumstances that led to the Experience battle of Mahabharata,Fought between the pandavas and the kauravas. It outlines the reasions that led to the revelation o.... ",
    },
    {
      title: "Chapter 2",
      subtitle: "Sankhya Yoga",
      text: " The Second chapter of the Bhagavad Gita - Sankhya Yoga.this is the most important chapter of the Bhagavad Gita as  Lord Krishna condenses the teachings of the entire Gita in this chapter.This chapter is the essence of the entire Gita.Sankhya Yoga can be categorized int.... ",
    },
    {
      title: " Chapter 3",
      subtitle: " Karma Yoga",
      text: " The Third chapter of the Bhagavad Gita - &quotKarma Yoga&quot.The Third chapter of the Bhagavad Gita is Karma Yoga or the Path of Selfless Service. Here Lord Krishna emphasizes the importance of Karma in the life.He reveals that it is important for every human being to engage in some sort of actiity in this material world. Futher,he.....",
    },
    {
      title: " Chapter 4",
      subtitle: "Jnana Karma Sankhya Yoga",
      text: " The Forth chapter of the Bhagavad Gita - &quotJnana Karma Sankhya&quot.In this chapter,Krishna glorifies the Karma Yoga and impartsthe Transcendental Knowledge (The Knowledge of soul and the ultimate Truth) to Arjuna.he reveals the reason behind his apprearance in this m....",
    },
    {
      title: "Chapter 5 ",
      subtitle: "Karma Sanyasa Yoga",
      text: "The fift chapter of the Bhagavad Gita is Karma Sanyasa Yoga.In this chapter,krishna compares the paths of renunciation in actions(Karma Sanyas) and actions with detachement (Karma Yoga) and explains that both are means to reach the same goal and we can choose aither.A wi..........",
    },
    {
      title: "Chapter 6",
      subtitle: "Dhyana Yoga",
      text: " The sixth chapter of the Bhagavad Gita is Dhyana Yoga. In this chapter, Krishna reveals the Yoga of meditation and how to practise this Yoga.he discusses the role of actionin preparing for meditation how perfoming duties in devotion purifies one's mind and heightens on......",
    },
    {
      title: "Chapter 7",
      subtitle: "Gyaan Vigyana Yoga",
      text: "The seventh chapter of the Bhagavad Gita is Gyaan Vidgyana Yoga.In this chapter,Krishna reveals that he is the eme Truth,the principal couse and the sutaining force of everything.He reveals this illusionary energy in this material world called maya.",
    },
    {
      title: "Chapter 8",
      subtitle: "Akshara Bhrama Yoga",
      text: "The  eighth chapter of the Bhagavad Gita is &quotAkshara Brahma Yoga$quot. In this chapter reveals the importance of the last thought before death. If we can remember Krishna at the time of death, we will certainly attain him. thus, it is very important to be in constant awareness of the Lord at all times, thinking of Him and chanting His names at all time. By perfectly absorbing their mind in Him through constant devotion, one can go beyond this materrial existence to Lord's Superme abode. ",
    },
    {
      title: "Chapter 9",
      subtitle: "Raja Vidhya Yoga",
      text: "The ninth chapter of the Bhagavad Gita is &quotRaja Vidhya Yoga&quot. In this chapter, Krishna explain that He is Superme and how this material existence is created, maintained and destroyed by His Yogmaya and all beings come and go under his supervision. He reveals the Role and the importance of Bhakti (transcendental devotional service) towards our Spriritual Awakening. In such devotion, one must live for the God, offer everything that he possesses to Him and do everyting for Him only. One who follows such devotion becomes free from the bonds of this material world and unites with the Lord. ",
    },
    {
      title: "Chapter 10",
      subtitle: "Vibhooti Yoga ",
      text: " The tenth chapter of the Bhagavad Gita is &quotVibhooti Yoga&quot. In this chapter, Krishna reveals Himself as the cause of all causes. He describes His various manifestations and opulences in order to increase Arjuna's Bhakti. Arjuna is fully convinced of Lord's paramount position an.........",
    },
    {
      title: "Chapter 11 ",
      subtitle: "Vishwaroopa Darshana Yoga",
      text: "The eleventh chapter of the Bhagavad Gita is &quotVishwaroopa Darshana Yoga&quot.In this chapter Arjuna requests Krishna to reveal His Univers Cosmic Form that Encompases allthe universes,The entire existence.Arjuna is grantededivine Vision to be to see the entirety of Creation in the body of the Supreme Lord Krishna.",
    },
    {
      title: "Chapter 12",
      subtitle: "Bhakti Yoga",
      text: "The Twelfth chapter of the Bhagavad Gita is &quotBhakti Yoga&quot In this chapter,Krishna emphasizes the superioty of Bhakti Yoga(the path of devotion) over all other types of spritual disciplines and reveals various aspescts of devotion. He Futher explain that the devotees",
    },
    {
      title: "Chapter 13",
      subtitle: "Kastra Ksetrajna Vibhaaga Yoga",
      text: " The Thirteenth chapter of the Bhagavad Gita is &quotKsetra Ksetrajna Vibhaaga Yoga&quot.The word &quotKsetra&quot means &quotthe field&quot,and the &quotKsetrajna&quot means &quotthe knower of the field&quot .we can think of our material body soul as the knower of the field .in this.....",
    },
    {
      title: "Chapter 14",
      subtitle: "Gunatraya Vibhaaga Yoga",
      text: "The Fourteenth chapter of the Bhagavad Gita is &quotGunatraya Vibhaaga Yoga&quot. In this chapter,krishna revealthe three gunas (modes) of the material nature-goodness, passion and ignorance which everything in the futher eexplains the seen....",
    },
    {
      title: "Chapter 15",
      subtitle: "purushottama Yoga",
      text: " The fifteenth chapter of the Bhagavad Gita is &quotpurushottama Yoga&quot. In Sanskrit,prusha means &quotAll prevading God&quot and purushottama means the  timeless & transcendental aspect of God. Krishna reveals that the purpose of this  Transcendental Knowledge of the god is to detech ourselvesfrom the boindage pf the material of the material world and to undesrstand Krishna as the Supreme devine",
    },
    {
      title: "Chapter 16",
      subtitle: "Daivasura Sampad Vibhaaga Yoga",
      text: "The Sixteenth chapter of the Bhagavad Gita is &quotDaivasura Sampad Vibhaaga Yoga&quot. In this chapter,krishna describes explicity the two kinds of natures among human beings - devine and demoniac.Those Who possess demoniac qualities associate themeselves with the modes ofpassion a....",
    },
    {
      title: "Chapter 17",
      subtitle: "Sradhatraya Vibhaaga Yoga",
      text: "The seventeenth chapter of the Bhagavad Gita is &quotSradhatraya Vibhaaga Yoga&quot.IN this chapter ,krishna describes the three tupes of tdaith corresponding to the three modes of the material nature. Lord Krishna futher reveals that it is the nature of faith that determiness the qua....",
    },
    {
      title: "Chapter 18",
      subtitle: "Moskha Sanyaas Yoga",
      text: "The eighteenth  chapter of the Bhagavad Gita is &quotMoskha Sanyas Yoga&quot.Arjuna requests the Lord to explain the difference betweenthe two types of renunciation.",
    },
  ];
  return (
    <div>
      <div className="image_div">
        <Card className="Imgcard">
          <Card.Img src={banner2} alt="Card image" />
          <Card.ImgOverlay>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Card.Text>
              <div>
                <h1 className="ex" id="Gita">
                  Experience the Gita
                </h1>
                <h1 className="ex" id="any">
                  Anywhere, Anytime
                </h1>
                <br></br>
                <button className="button">Read Now</button>
              </div>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
      <br></br>
      <br></br>
      <div className="carddiv">
        <div className="innercarddiv">
          <h2 className="verse">
            Verse of the day - BG 8.7
            <hr></hr>
          </h2>
          <p className="para">
            Who and how is Adhiyajna here is this body, O destroyer of Madhu?
            and how,at the time of death, are you to be known by the
            self-controlled?
          </p>
          <button className="seemore">
            <a>SEE MORE</a>
          </button>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="outerinput">
        <div className="innerinput">
          <h3 className="have">
            Have the Shloka of theDay deliverd to your inbox each morning
          </h3>
          <form className="classform">
            <input
              placeholder="Enter your name"
              type="text"
              className="enter"
            ></input>
            <input
              placeholder="Enter your Email"
              type="email"
              className="enter"
            ></input>
            <button className="subscribe">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="chaptersdiv">
        <div className="chaptersdiv_2">
          <div>
            <h2 className="chapters">Chapters</h2>
          </div>
          <div>
              <div className="chaptersdiv_3">
                <div className="row">
                {Chapters.map((item) => (
                    <div className="col-6" id="column6"> 
                  <a className="A_tag">
                    <h2 className="title">{item.title}</h2>
                    <h3 className="subtitle">{item.subtitle}</h3>
                    <p className="text">{item.text}</p>
                  </a>
                  </div>
                   ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bhagawat;
