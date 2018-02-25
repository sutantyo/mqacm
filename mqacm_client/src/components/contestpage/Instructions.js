import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles';
import {grey600} from 'material-ui/styles/colors';

let paperStyle = {
  backgroundColor: 'rgba(255,255,255,0.7)',
  padding: '2px 15px 10px 15px',
  marginTop: '8px',
  marginLeft: '2%',
  marginRight: '2%',
  marginBottom: '8px',
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
          <h2>Registration</h2>
          <p>
            To participate in this contest, please begin by creating an account
            on <a href='https://uva.onlinejudge.org' target='_blank' rel='noopener noreferrer'>UVA online judge website</a>.
            The UVA website is where you will be submitting your code.
            Once you have registered, please let us know of your UVA Judge ID (or alternatively, your username)
            so that we can add you to the leaderboard.
            You can start attempting the questions right away since the leaderboard uses UVA database.
          </p>
          <p>
            You can get started by looking at the warm-up questions on the Problem Set tab.
            For each problem, the link will take you to the UVA page containing its description,
            as well as links to submit and debug (uDebug).
          </p>
          <p>
            For each problem, you need to submit a source code in Java, C/C++ or Python.
            Your source code will then be compiled by the UVA server and tested with
            some input data.
            The correctness of your submission is determined by the output it produces when given
            the test input data.
            In each problem description, you can almost always see a sample input and its
            expected output.
            However, your submission will be judged by extra test cases that are not shown in the
            problem description, and you can be sure that these hidden test cases are the
            tricky ones.
          </p>
          <p>
            To help you in submitting a correct solution, you should also use uDebug.
            For each problem, the uDebug page lets you try different input data on an actual working
            code, so that you can get the expected output.
            Given an input data, you can also paste your code's output there to see the differences with the
            expected output.
            Perhaps the most important feature of uDebug is that it provides you with extra test data
            which often contain the tricky corner cases that you missed.
          </p>
        </Paper>
        <Paper style={paperStyle}>
          <h2>How to submit using Java</h2>
          <p>

          Note that your source code must be submitted as a single file containing the
          class Main which serves as the starting point for the program via the public static
          main method.
          You can have several classes on the same file, but you cannot declare any packages.
          Please see the sample code below, and for a more complete
          information, <a href="https://uva.onlinejudge.org/index.php?option=com_content&task=view&id=15&Itemid=30">
          the official guideline on how to submit a Java program
            </a>.
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
          Unfortunately Eclipse is not very good when it comes to reading stdin and the best
          method for this is to do it via the command line.
          From the command line, go to the folder that contains your Java executable,
          create a file containing the input data (say in.txt), then run
          <SyntaxHighlighter language='bash' style={tomorrowNightEighties}>
            {bashString}
          </SyntaxHighlighter>
          The output of your code will be written into the file out.txt.
          If you want to see the output on the screen, then you can simply delete
          the "> output.txt" bit.
        </Paper>
      </div>
    );
  }
}

export default Instructions;


let codeString = `
import.java.io.*;
import.java.util.*;

class Main{
  public static void main (String args[]){
    Scanner in = new Scanner(new InputStreamReader(System.in));
    while (in.hasNext()){int l = in.nextInt();
      int m = in.nextInt();
      int r = in.nextInt();
      int out = (l > m) ? ((l > r) ? l : r) : ((m > r) ? m : r);
      System.out.println(out);
    }
  }
}`

let bashString = "java Main < in.txt > out.txt"
