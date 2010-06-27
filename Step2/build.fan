using build
class Build : build::BuildPod
{
  new make()
  {
    podName = "hello-fantom-Step2"
    summary = ""
    srcDirs = [`./`, `sandbox/`, `helloJsStep2Demo/`, `helloJsStep2Demo/fan/`, `helloJsStep2/`, `helloJsStep2/js/`, `helloJsStep2/fan/`]
    depends = ["sys 1.0"]
  }
}
