using build
class Build : build::BuildPod
{
  new make()
  {
    podName    = "helloJsStep2"
    summary    = "helloJsStep2"
    depends    = ["sys 1.0+"]
    srcDirs    = [`fan/`]
    jsDirs     = [`js/`]
  }
}
