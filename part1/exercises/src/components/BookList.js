export default function BookList() {
   let pageTitle = "Picture Books for Fall";
   let book1 = "https://www.learningthroughliterature.com/wp-content/uploads/2021/09/pumpkin-pumpkin-book-image-494x400.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51F595K76cL._SX342_SY445_.jpg";
   let book3 = "https://readaloudrevival.com/wp-content/uploads/2016/09/51ArttApiEL.jpg";
   let book4 = "https://readaloudrevival.com/wp-content/uploads/2016/04/510Q6LXOVWL.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Pumpkin, Pumpkin by Jeanne Titherington" width="400px"/><br/>
         <img src={book2} alt="The Scarecrow's Hat by Ken Brown" width="295px"/>
         <img src={book3} alt="Fletcher and the Falling Leaves by Julia Rawlinson" width="300px"/>
         <img src={book4} alt="Cranberry Thanksgiving by Wende and Harry Devlin" width="260px"/>

      </div>      
   );
}