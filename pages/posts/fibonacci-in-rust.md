## [Fibonacci In Rust](/posts/fibonacci-in-rust.html)
April 14, 2013

````rust
// (the slow, recursive way)

fn fib(x :int) -> int {
  match x {
    0 => 0
    , 1 => 1
    , _ => fib(x-1) + fib(x-2)
  }
}

fn main() {
  let mut n = 0;
  while n < 40 {
    io::println(fmt!("fib %?: %?", n, fib(n)));
    n += 1;
  }
}
````