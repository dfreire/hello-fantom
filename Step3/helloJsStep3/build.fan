using build
class Build : build::BuildPod
{
  new make()
  {
    podName    = "helloJsStep3"
    summary    = "helloJsStep3"
    depends    = ["sys 1.0+"]
    srcDirs    = [`fan/`]
    jsDirs     = [`js/`]
  }
}
