let PredictionList = [

  {
    "Prediction": "TCP declares war on PIC, and Shallissa departs from PIC",
    "Reason": "The Templars recently attempted to invade People's Imperial Confederation's Migrator. It appears that the relationships are on the brink of its end due to leaders separated between the armies. Shallissa is close to inactivity, too. The Templars leadership seem to have an internal conflict upon deciding this, looking at Jojo Teri's recent messages. Shallissa may leave the Confederation to join the Templars.",
    "PredictedFor": "Within 2 weeks",
    "PredictedOn": "July 16, 2024",
    "Predictor": "Fwapo",
    "Status": "Waiting to be proved"
  },

  {
    "Prediction": "Secret Service upgrades to Major",
    "Reason": "The Secret Service has been consistently acquiring sizes of over 20, up to almost 40. It is almost undoubted that SS will upgrade to Major after meeting the requirements.",
    "PredictedFor": "July 21, 2024",
    "PredictedOn": "July 16, 2024",
    "Predictor": "Fun X Time",
    "Status": "Waiting to be proved"
  },

  {
    "Prediction": "Mare's promotion to Executive Producer",
    "Reason": "Mare is the highest non-administrator serving at the Club Penguin Armies league. She is not affiliated and has taken up high positions at CPA and CPAJ. Therefore, it is not unlikely that she is the next Executive Producer. There does not seem to be any other good fit who has matched wisdom.",
    "PredictedFor": "After Mchappy's Retirement",
    "PredictedOn": "July 16, 2024",
    "Predictor": "Fun X Time",
    "Status": "Waiting to be proved"
  },

  {
    "Prediction": "Mchappy retires from Club Penguin Armies",
    "Reason": "Mchappy has been repeatedly hinting at his leave. He has stated this in multiple posts, and also seems to be fulfilling his greatest desires to leave hallmarks on his time as Chief Executive Producer. Legends Cup XIV may have been a double-elimination style tournament for this reason.",
    "PredictedFor": "After Legends Cup XIV",
    "PredictedOn": "July 16, 2024",
    "Predictor": "Fun X Time",
    "Status": "Waiting to be proved"
  }

];

function ShowPredictions(Predictions) {
  let Count = Predictions.length;
  Predictions.forEach(Prediction => {
    document.querySelector(`#PredictorList`).innerHTML += (`
      <tr>
        <td class="PredictionID">${Count}</td>
        <td
          class="Prediction"
          title="${Prediction.Reason}"
          onclick='alert("${Prediction.Reason}")'
        >
        ${Prediction.Prediction}
        </td>
        <td class="PredictedFor">${Prediction.PredictedFor}</td>
        <td class="PredictedOn">${Prediction.PredictedOn}</td>
        <td
          class="Predictor"
          title="User details"
          onclick='alert("${Prediction.Predictor} has predicted ${Prediction.Predictor.PredictionCount} times. Their accuracy is ${Prediction.Predictor.Accuracy}%.")'
        >
        ${Prediction.Predictor}
        </td>
        <td class="Status">${Prediction.Status}</td>
      </tr>
    `);
    Count -= 1;
  });
};

function SetMeters(Predictions) {
  let Total = Predictions.length;
  let Proven = 0;
  let Accuracy = {
    Accurate: 0,
    Inaccurate: 0
  };

  Predictions.forEach(Prediction => {
    if (Prediction.Status == `Proved`) {
      Accuracy.Accurate += 1;
      Proven += 1;
    } else if (Prediction.Status == `Proved False`) {
      Accuracy.Inaccurate += 1;
    }
  });

  Accuracy.Score = (Accuracy.Accurate / (Accuracy.Accurate + Accuracy.Inaccurate)) * 100 || 0;

  document.querySelector(`#AccuracyMeter`).innerHTML = `${Accuracy.Score}%`;
  document.querySelector(`#PredictionsMeter`).innerHTML = `${Total}`;
  document.querySelector(`#ProvenMeter`).innerHTML = `${Proven}`;
};

ShowPredictions(PredictionList);
SetMeters(PredictionList);
