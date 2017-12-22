import scala.sys.process.Process

name := """code-lab"""
organization := "com.linkebon"

version := "1.0.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.3"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test

lazy val buildFrontends = taskKey[Unit]("Build frontends")

buildFrontends := {
  counterAppFrontend.value
}

lazy val counterAppFrontend = taskKey[Unit]("Install npm")
counterAppFrontend := {
  val frontendPath = baseDirectory.value.getPath + "/frontend/react-redux-counter-app"
  println("test" + frontendPath)
  Process(s"npm install --prefix $frontendPath").!
  Process(s"npm run generateFrontend --prefix $frontendPath").!
}