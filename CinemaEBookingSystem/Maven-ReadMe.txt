MAKE SURE YOU HAVE LATEST MAVEN INSTALLED PROPERLY ON YOUR COMPUTER

- Java files go under src\main\java\com\yourgroup\cinemaebooking (I know it's long but that's what maven likes)
- Java files in that directory are package com.yourgroup.cinemaebooking;

- To compile, use mvn compile
- mvn clean install will remove old build artifacts, compile source code, package the application, and install to local repository

- To run a specific class USING MAVEN:
  - The pom.xml file has a plugin at the bottom that looks like this:
            <plugin>
                <groupId>org.codehaus.mojo</groupId>
                <artifactId>exec-maven-plugin</artifactId>
                <version>3.4.1</version>
                <configuration>
                    <mainClass>your.class.here</mainClass>
                </configuration>
            </plugin>
  - You can replace your.class.here with the class you want to run
  - Then make sure you save the pom.xml file
  - Finally, use mvn exec:java to run the class

- OR, just use javac -cp target/classes your.class.here