using build
class Build : build::BuildPod
{
  new make()
  {
    podName    = "helloJsStep3Demo"
    summary    = "helloJsStep3Demo"
    depends    = ["sys 1.0+", "util 1.0+", "web 1.0+", "webmod 1.0+", "wisp 1.0+", "helloJsStep3 1.0+"]
    srcDirs    = [`fan/`]
    resDirs    = [`res/`]
  }
}
