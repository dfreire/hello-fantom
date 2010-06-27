using build
class Build : build::BuildPod
{
  new make()
  {
    podName    = "helloJsStep1"
    summary    = "helloJsStep1"
    depends    = ["sys 1.0+"]
    srcDirs    = [`fan/`]
    jsDirs     = [`js/`]
  }
}
