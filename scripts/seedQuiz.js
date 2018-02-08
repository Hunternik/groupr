const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
const keys = require("../config/keys");
const mongoURI = process.argv[2] === "prod" ? keys.mongoURIPROD : keys.mongoURI;
mongoose.connect(mongoURI);

module.exports = async () => {
  const quiz = [
    {
      questions: [
        {
          q: "What is printed when the following code is executed?",
          question:
            '<span class="green">def</span> factory(): \r\n\t values = [] \r\n\t <span class="green">def</span> <span class="blue">widget</span>(value): \r\n\t\t values.append(value) \r\n\t\t <span class="green">return</span> values \r\n\t <span class="green">return</span> widget \r\n \r\n worker = factory() \r\n worker(<span class="bluegreen">1</span>) \r\n worker(<span class="bluegreen">2</span>) \r\n <span class="green">print</span> worker(<span class="bluegreen">4</span>)',
          answers: {
            A: "[1,2,4]",
            B: "[4]",
            C: "7",
            D: "[1,2]"
          },
          correct: '<span class="pre">[1,2,4]</span>',
          modalanswer: "[1,2,4]"
        },
        {
          q: "Fill in the missing line of code:",
          question:
            '<span class="green">def</span> <span class="blue">find_max</span>(nums): \r\n\t max_num = float(<span class="bluegreen">"-inf"</span>) <span class="grey"># smaller than all other numbers</span> \r\n\t <span class="green">for</span> num <span class="green">in</span> nums: \r\n\t\t <span class="green">if</span> num > max_num: \r\n\t\t\t <span class="grey">#(Fill in the missing line here)</span> \r\n\t <span class="green">return</span> max_num',
          answers: {
            A: "num = max_num",
            B: "max_num += 1",
            C: "max_num = num",
            D: "max_num += num"
          },
          correct: '<span class="pre">max_num = num</span>',
          modalanswer: "max_num = num"
        },
        {
          q: "What is printed out when the following code is executed?",
          question:
            '<span class="green">def</span> <span class="blue">modify</span>(elems): \r\n\t elems.append(<span class="bluegreen">"foo"</span>) \r\n\t elems = [<span class="bluegreen">"bar", "baz"</span>] \r\n \r\n array = [<span class="bluegreen">"qux"</span>] \r\n modify(array) \r\n <span class="green">print</span> array',
          answers: {
            A: '[" qux "]',
            B: '[" bar ", " baz "]',
            C: '[" foo ", " bar ", " baz "]',
            D: '[" qux ", " foo "]'
          },
          correct: '<span class="pre">[" qux ", " foo "]</span>',
          modalanswer: '[" qux ", " foo "]'
        }
      ]
    }
  ];

  try {
    await db.Quiz.remove({});
    const data = await db.Quiz.collection.insertMany(quiz);
    console.log(`${data.insertedCount} quizes successfully seeded`);
    return;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
