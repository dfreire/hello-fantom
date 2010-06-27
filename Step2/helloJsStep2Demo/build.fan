using build
class Build : build::BuildPod
{
  new make()
  {
    podName    = "helloJsStep2Demo"
    summary    = "helloJsStep2Demo"
    depends    = ["sys 1.0+", "helloJsStep2 1.0+"]
    srcDirs    = [`fan/`]
  }
}
