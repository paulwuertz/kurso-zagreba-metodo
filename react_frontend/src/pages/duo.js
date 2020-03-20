import React, { Component } from "react";
import questions from "../data/ekzerco3_de.json";
import ProgressBar from "./ProgressBar"
import "./LekcioEkzercoj.css"
import {keyboard, tabs} from "./helpers.js"

const SelectedBlocks = ({ blocks, selectedBlockIds, unselectBlock }) => {
  const selectedBlocks = selectedBlockIds.map(blockId =>
    blocks.find(b => b.id === blockId)
  );
  return (
    <div className="row justify-content-md-center selected_block_container">
      <div className="row col-12 justify-content-md-center">
      <div className="answereLine row col-md-8" style={{ borderBottom: "2px solid #e5e5e5", width: "100%", minHeight: "55px", margin: "25px 0" }}>
      <div className="row col col-md-12 justify-content-md-center">
          {selectedBlocks.map(block => (
            <div className="rounded selected_block" key={block.id} id={`selected-block-${block.id}`}
              onClick={() => {
                showMovingBlock(block.id, false);
                unselectBlock(block.id);
              }}
            >
              {block.text}
            </div>
          ))}
      </div>
      </div>
      </div>
    </div>
  );
};

const TaskSwitcher = ({textOrBlockMode, toogleTaskType}) => {
    return <div style={{ border: "none" }} className="col-md-4 task_button task_switcher btn" onClick={() => {toogleTaskType()}}>
        <span>{ textOrBlockMode === "block" ? tabs : keyboard }</span>
        <span className="ml-2 align-middle">{textOrBlockMode === "block" ? "Tajpi" : "Ordigi" }</span>
    </div>
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMovingBlock = async (id, isBeingSelected) => {
  const startTime = Date.now();
  const duration = 100;
  while (
    !document.getElementById(`selected-block-${id}`) ||
    !document.getElementById(`unselected-block-${id}`)
  ) {
    await sleep(0);
  }
  let startEl = document.getElementById(`selected-block-${id}`);
  let endEl = document.getElementById(`unselected-block-${id}`);
  if (isBeingSelected) [startEl, endEl] = [endEl, startEl];
  const [{ x: startX, y: startY }, { x: endX, y: endY }] = [startEl, endEl].map(
    e => e.getBoundingClientRect()
  );
  const [dx, dy] = [endX - startX, endY - startY];
  endEl.style.visibility = "hidden";

  const movingBlock = document.createElement("div");
  movingBlock.textContent = startEl.textContent;
  movingBlock.style.position = "absolute";
  movingBlock.style.left = startX + "px";
  movingBlock.style.top = startY + "px";
  movingBlock.style.padding = "10px";
  movingBlock.style.background = "white";
  document.body.appendChild(movingBlock);

  (function moveBlock() {
    const now = Date.now();
    if (now >= startTime + duration) {
      endEl.style.visibility = "initial";
      return movingBlock.parentNode.removeChild(movingBlock);
    }
    const percentage = (now - startTime) / duration;
    const x = startX + dx * percentage;
    const y = startY + dy * percentage;
    movingBlock.style.left = x + "px";
    movingBlock.style.top = y + "px";
    requestAnimationFrame(moveBlock);
  })();
};

const UnselectedBlocks = ({ blocks, selectedBlockIds, selectBlock }) => (
  <div className="row col-12 mb-5 mt-5 justify-content-md-center">
  <div className="row col col-md-8 unselected_block">
    {blocks.map(block => {
      const isSelected = selectedBlockIds.includes(block.id);
      return (
        <div className="rounded" key={block.id}
          style={{
            background: isSelected ? "#aaa" : "white", color: isSelected ? "#aaa" : "black",
            border: "3px solid grey", padding: 10, margin: 5, cursor: "pointer", userSelect: "none"
          }}
          onClick={() => {
            if (!isSelected) {
              showMovingBlock(block.id, true);
              selectBlock(block.id);
            }
          }}
          id={`unselected-block-${block.id}`}>
            {block.text}
        </div>
      );
    })}
  </div>
  </div>
);

const buttonState = {
  cannotAnswer: 1,
  canAnswer: 2,
  answered: 3
};

const CheckButton = ({ state, checkAnswer, nextQuestion }) => (
  <div className= "col-lg-2 col-md-3 col-12 task_button"
    style={{
      color: state === buttonState.cannotAnswer ? "#888" : "white",
      background: state === buttonState.cannotAnswer ? "#ccc" : "#13c713",
    }}
    onClick={() => {
      if (state === buttonState.canAnswer) {
        //checkAnswer();
        nextQuestion();
      }
  }}>
    {state === buttonState.answered ? "CONTINUE" : "CHECK"}
  </div>
);

const Results = ({ answered, isCorrect, solution }) =>
  answered ? (
    <div className="results" style={{
        color: isCorrect ? "green" : "red", background: isCorrect ? "lime" : "pink",
    }}>
      {isCorrect ? (
        <div style={{ fontSize: 24 }}>You are correct</div>
      ) : (
        <div>
          <div style={{ fontSize: 24 }}>Oops, that's not correct.</div>
          <div>{solution}</div>
        </div>
      )}
    </div>
  ) : null;

const selectBlock = blockId => ({ selectedBlockIds }) => ({
  selectedBlockIds: selectedBlockIds.concat(blockId)
});

const unselectBlock = blockId => ({ selectedBlockIds }) => ({
  selectedBlockIds: selectedBlockIds.filter(id => id !== blockId)
});

const checkAnswer = ({correctAnswers, blocks, selectedBlockIds, solutions }) => ({
  correctAnswers: correctAnswers + (solutions.includes(
      selectedBlockIds.map(id => blocks.find(b => b.id === id).text).join("")
    ) ? 1 : 0),
  answered: true
});


class Lesson extends Component {
  state = {
      questionId: 0,
      lessonId: 1,
      questions: questions,
      correctAnswers: 5,
      sentence: questions[3][0].sentence,
      solutions: questions[3][0].solutions,
      blocks: questions[3][0].blocks,
      selectedBlockIds: [],
      answered: false,
      textOrBlockMode: "block"
  };

  constructor(props){
      super(props);
      this.enhavo = props.state
      this.lekcio = props.lekcio
  }

  toogleTaskType = function() {
      console.log("to", this.state.textOrBlockMode);
      return {
        textOrBlockMode: this.state.textOrBlockMode === "block" ? "text" : "block"
      }
  }

  nextQuestion = function() {
      this.state.questionId++;
      if(this.state.questionId < this.state.questions["1"].length){
        return {
          selectedBlockIds: [], answered: false,
          sentence: questions["3"][this.state.questionId].sentence,
          solutions: questions["3"][this.state.questionId].solutions,
          blocks: questions["3"][this.state.questionId].blocks,
        }
      } else {
          return {selectedBlockIds:"", answered:"", sentence:"", solutions:"", blocks:""}
      }
  }

  textMode = function() {
    const {
      correctAnswers, sentence, solutions, blocks, selectedBlockIds, answered, textOrBlockMode
    } = this.state;
    //<span>
    //   for parto in vico -%}
    //      set parto_loop = loop %}
    //      set id = 'vico-' ~ leciono_index ~ '-' ~ ekzerco_index ~ '-' ~ vico_loop.index ~ '-' ~ parto_loop.index %}
    //       for klavo,valoro in parto.items() -%}
    //        if klavo == 'videbla' -%}
    //          if valoro -%}
    //           valoro}}
    //          else %}  endif -%}
    //        elif klavo == 'solvo' -%}
    //           <span id="form-group-id}}" class="form-group input-material" style={"display: inline-flex;"}>
    //               <input id="id}}" type="text" class="form-control truvorto"  size="valoro|length}}" data-solvo="valoro}}" required/>
    //           </span>
    //        endif -%}
    //    endfor -%}
    //    endfor -%}
    //</span>
    return <div style={{ textAlign: "center", marginBottom: 20 }}>
      {"sentence"+JSON.stringify(sentence)}<br/><br/>
      {"blocks"+JSON.stringify(blocks)}<br/><br/>
      {"correctAnswers"+JSON.stringify(correctAnswers)}<br/><br/>
      {sentence.map(({ text, translations }, i) => (
        <span key={i} className="form-group input-material" style={{display: "inline-flex"}}>
          {text}
          <input type="text" className="form-control truvorto"  size={text.length} data-solvo={text} required/>
        </span>
      ))}
    </div>
  }

  blockMode = function() {
    const {
      correctAnswers, sentence, solutions, blocks, selectedBlockIds, answered, textOrBlockMode
    } = this.state;
    return <div>
       <div style={{ textAlign: "center", marginBottom: 20 }}>
         {sentence.map(({ text, translations }, i) => (
           <span key={i} className="inner_block" title={translations.join("\n")}>
             {text}
           </span>
         ))}
       </div>
       <SelectedBlocks blocks={blocks} selectedBlockIds={selectedBlockIds}
         unselectBlock={id => this.setState(unselectBlock(id))}
       />
       <UnselectedBlocks blocks={blocks} selectedBlockIds={selectedBlockIds}
         selectBlock={id => this.setState(selectBlock(id))}
       />
     </div>
    }

  successScreen = function(){
    return <div>
        Done!!!
    </div>
  }

  taskScreen = function(){
    const {
      correctAnswers, sentence, solutions, blocks, selectedBlockIds, answered, textOrBlockMode
    } = this.state;
    return <div>
      <ProgressBar percent={Math.max(this.state.questionId / this.state.questions["1"].length * 100, 1)}/>
      <h2 className="mt-4" style={{ textAlign: "center" }}>Translate this sentence</h2>
      <div>
      { this.state.textOrBlockMode === 'text' ? this.textMode() : this.blockMode() }
      </div>
      <div className="row justify-content-md-center">
        <div className= "col-lg-2 col-md-3 d-none d-md-flex task_button" onClick={this.nextQuestion}>
          SKIP
        </div>
        <div className= "row col-lg-8 col-md-6 d-none d-md-flex justify-content-md-center">
            <TaskSwitcher textOrBlockMode={this.textOrBlockMode} toogleTaskType={() => this.setState(this.toogleTaskType)}/>
        </div>
        <CheckButton state={
                answered ? buttonState.answered : selectedBlockIds.length === 0
                         ? buttonState.cannotAnswer : buttonState.canAnswer
          }
          checkAnswer={() => this.setState(checkAnswer)} nextQuestion={() => this.setState(this.nextQuestion)}
        />
      </div>
      <Results answered={answered} solution={solutions[0]} isCorrect={solutions.includes(
          selectedBlockIds.map(id => blocks.find(b => b.id === id).text).join("")
      )}/>
    </div>
  }

  ekzerco = function(){
      if (this.state.questionId >= this.state.questions["1"].length) {
          return this.successScreen();
      } else {
          return this.taskScreen();
      }
  }

  render() {
    return (
      <div className="col" style={{ margin: "0 auto", padding: "0 1em", minHeight: "70vh"}}>
        { this.ekzerco() }
      </div>
    );
  }
}

export default Lesson;
