using build
class Build : build::BuildPod
{
  new make()
  {
    podName = "hello-fantom-Step1"
    summary = ""
    srcDirs = [`helloJsStep1/fan/`]
    depends = ["sys 1.0"]
  }
}
