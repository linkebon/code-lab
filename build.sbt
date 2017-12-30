import scala.sys.process.Process

name := """code-lab"""
organization := "com.linkebon"

version := "1.0.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.3"

libraryDependencies += guice
libraryDependencies += ws
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test

lazy val buildFrontends = taskKey[Unit]("Build frontends")

buildFrontends := {
  counterAppFrontend.value
  todoAppFrontend.value
}

lazy val counterAppFrontend = taskKey[Unit]("generate counterApp")
counterAppFrontend := {
  val frontendPath = baseDirectory.value.getPath + "/frontend/react-redux-counter-app"
  Process(s"npm install --prefix $frontendPath").!
  Process(s"npm run generateFrontend --prefix $frontendPath").!
}

lazy val todoAppFrontend = taskKey[Unit]("generate todoApp")
todoAppFrontend := {
  val frontendPath = baseDirectory.value.getPath + "/frontend/react-redux-todo-app"
  Process(s"npm install --prefix $frontendPath").!
  Process(s"npm run generateFrontend --prefix $frontendPath").!
}