#include <cilk/cilk.h>
#include <cilk/cilk_api.h>
#include <cstdlib>
#include <iostream>
#include <string>

int fib(int n)
{
     if (n < 2)
	  return (n);
     else {
	  int x, y;
	  x = cilk_spawn fib(n - 1);
	  y = cilk_spawn fib(n - 2);
	  cilk_sync;
	  return (x + y);
     }
}

void show_usage(std::string name)
{
  std::cerr << "Usage: " << name << " [-n <proc_number>] " << std::endl;
}


int main(int argc, char *argv[])
{
  int n, result;

  if (argc != 2 and argc != 4) { show_usage(argv[0]); return 1; }
  if (argc == 4)
    {
      if (std::string(argv[1]) != "-n")  { show_usage(argv[0]); return 1; }
      std::string nproc = std::string(argv[2]);
      if (__cilkrts_set_param("nworkers", nproc.c_str()) != __CILKRTS_SET_PARAM_SUCCESS)
	std::cerr << "Failed to set the number of Cilk workers" << std::endl;
    }
  n = atoi(argv[argc - 1]);
  result = fib(n);

  std::cout << "Result: " << result << std::endl;
  return 0;
}
