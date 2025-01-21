import pytest
from math_helper import add,subtract,multiply,divide, factorial


def test_add():
    assert add(1,2) == 3
    
def test_subtract():
    assert subtract(2,1) == 1
    
def test_multiply():
    assert multiply(2, 3) == 6

def test_divide():
    assert divide(6, 2) == 3


def test_divide_by_zero():
    with pytest.raises(ValueError):
        divide(3,0)
        

def test_factorial():
    assert factorial(5) == 100
    assert factorial(0) == 1

def test_factorial_negative():
    with pytest.raises(ValueError):
        factorial(-1)
