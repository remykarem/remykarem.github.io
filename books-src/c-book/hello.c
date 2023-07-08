#include <unistd.h>

int main() {
  const char *message = "Hello, world!";
  write(1, message, 14);
  return 0;
}
