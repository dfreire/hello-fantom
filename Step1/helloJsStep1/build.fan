using build

class Build : BuildPod
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
