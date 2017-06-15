import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles';
import {grey600} from 'material-ui/styles/colors';

let paperStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  padding: '20px 15px 10px 15px',
  marginTop: '8px',
  marginLeft: '2%',
  marginRight: '2%',
  fontSize: '14px',
  lineHeight: '1.5',
  color: grey600

}

class Instructions extends Component{
  componentWillMount(){
  }

  render(){
    return (
      <div>
        <Paper style={paperStyle}>
          This section is still a work in progress. Please email any suggestions or questions to
          daniel(dot)sutantyo(at)mq(dot)edu(dot)au.
        </Paper>
        <Paper style={paperStyle}>
          <p>
            To participate in this contest, please create an account on
            <a href='https://uva.onlinejudge.org' target='_blank' rel='noopener noreferrer'>
            UVA online judge website</a>,
            which is the site that we are using to judge the correctness
            of your submission. Once you have an account, click on
            the Problem Set tab and browse through the problems.
            Clicking on the problem title will take you to problem
            description and submission page. For each problem, you will see links to
            submit and debug (uDebug).
          </p>
          <p>
            The correctness of your code is determined by the output it produces when given
            the test input data. The question almost always contain a sample input and its
            corresponding output.
            Your submission will be judged by extra test cases that are not shown in the
            problem description, and you can be sure that these hidden test cases are the
            tricky ones.
          </p>
          <p>
            Fortunately, to help you in submitting correctly, the site also features uDebug.
            You can try different inputs on uDebug and it will give you the expected outputs
            for each of them.
            You can also paste your code's output there to see the differences with the
            expected output.
            uDebug also has extensive test data that you can try on your code.
          </p>
        </Paper>
        <Paper style={paperStyle}>
          <h1>How to submit using Java</h1>
          <p>
          Please read
          the official <a href="https://uva.onlinejudge.org/index.php?option=com_content&task=view&id=15&Itemid=30">
          guideline on how to submit a Java program
          </a>.
          Note that your source code must be submitted as a single file containing the
          class Main which serves as the starting point for the program via the public static
          main method.
          You can have several classes on the same file, but you cannot declare any packages.
          Please see the sample code below.
          </p>
          <p>
          If you are using Eclipse, then I suggest that you create a new java project for each question
          and write your code in Main.java under the default package (i.e. no package).
          Another option is to write your code under one project in different packages
          and simply delete the package line from the source code before submitting.
          </p>
          <p>
          Almost every question require you to read input from the standard input, that is,
          it expects you to type in the input after you run the program.
          In Eclipse, you can do this by typing on the console after running the program.
          As an example, I have written a simple Java code using Scanner class that will take three
          integer inputs and output the maximum of the three. You can give it a try; simply run
          the program and for every three integers you type in, the maximum will be printed whenever
          you press enter. To stop the program, press ctrl+z (Windows) or ctrl+d (Unix/Mac).
          </p>

          <SyntaxHighlighter language='java' style={tomorrowNightEighties}>
            {codeString}
          </SyntaxHighlighter>

          Of course testing your program by inputting the test data can be cumbersome.
          The recommended method is to create a text file containing the input and then
          feed this to your program.
          Unfortunately Eclipse is not very good when it comes to reading stdin.
          You need to do this via the command line: go to the folder that contains your
          executable and run
          <SyntaxHighlighter language='bash' style={tomorrowNightEighties}>
            {bashString}
          </SyntaxHighlighter>
          where in.txt is the file containing your sample input.
          The output of your code will be written into the file out.txt.
          If you want to see the output on the screen, then you can simply delete
          the "> output.txt" bit.
        </Paper>
      </div>
    );
  }
}

export default Instructions;


let codeString = "import.java.io.*;\nimport.java.util.*;\n\nclass Main\n{\npublic static void main (String args[]){\nScanner in = new Scanner(new InputStreamReader(System.in));\nwhile (in.hasNext()){\nint l = in.nextInt();\nint m = in.nextInt();\nint r = in.nextInt();\nint out = (l > m) ? ((l > r) ? l : r) : ((m > r) ? m : r);\nSystem.out.println(out);\n}\n}\n}"

let bashString = "java Main < in.txt > out.txt"
