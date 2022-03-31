import "./styles.css";
import * as Utils from "./utils";
import * as DataBusiness from "./data-business";

DataBusiness.getCharacters().then((data) => {
  const characters = data;
  const nodes = [];

  for (let character of characters) {
    const node = Utils.createCharacterRow(character);
    
    node.onclick = function(){
      DataBusiness.getCharacterByID(character.char_id).then(data => {
        Utils.showCharacter(data[0]);
      });
    };
    nodes.push(node);
  }

  for (let node of nodes) {
    document.getElementById("root").append(node);
  }
});
