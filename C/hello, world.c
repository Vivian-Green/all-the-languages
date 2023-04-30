#include <stdio.h>
#include <time.h>
#include <math.h>

int count = 0;
int magicPrimeFactorizationDivider = 100000;//handles scale for numbers

void fibonacci() {
    printf("\n\nhow many iterations of fibonacci to run? ");
    scanf("%d", &count);

    if (!count || count < 1) {
        printf("\ninvalid input, using default (20)");
    }

    int a = 0;
    int b, c = 1;

    for (int i = 0; i < count; i++) {
        printf("\n%d", c);
        c = a + b;
        a = b;
        b = c;
    }
}

void leibnizPi() {
    printf("\n\n\nhow many thousands of iterations of leibniz's pi approximation algorithm to run? ");
    scanf("%d", &count);
    if (!count) {
        printf("\ninvalid input, using default (20)");
        count = 20;
    }

    double num = 1;
    double thisIteration;
    for (int i = 3; i < 25000 * count; i += 4) {
        num = num - 1.0 / i + 1.0 / (i + 2);
        if (i % 25000 == 3) {
            thisIteration = (num + -1 / (i + 4)) * 4;
            printf("\n%lf", thisIteration);
        }
    }
    thisIteration = (num) * 4;
    printf("\n%lf", thisIteration);
}

void findPrimeFactors(int product) {
    int factorsLength = 0;
    const int originalProduct = product;

    while (product % 2 == 0) {
        product = product / 2;
        //int small = pow(2, factorsLength+1);
        //int large = (int) originalProduct/small;
        //printf("(%d, %d)", small, large);
        printf("%d ", 2);
        factorsLength++;
    }

    int i = 3;
    while (i <= product) {
        if (product % i == 0) {
            product = product / i;
            //printf("(%d, %d) ", i, originalProduct/i);
            printf("%d ", i);
            i = 3;
            factorsLength++;
        }
        else {
            i = i + 2;
            if (i > product / i) {
                break;
            }
        }
    }
    printf("%d ", product);
}

void primeFactorization() {
    printf("\n\nhow many numbers to find the prime factorization of? ");
    scanf("%d", &count);
    int completeness = 0;

    for (int i = 0; i < count; i++) {
        if (i % 100 == 0) {
            completeness = floor(i / count * 10000 + 0.5) / 100;
        }
        int product = 2 + rand() / magicPrimeFactorizationDivider;

        printf("\n%d%% product: %d, factors: ", completeness, product);
        findPrimeFactors(product);
    }
}

int main(void) {
    srand(time(NULL));

    printf("Hello, world\n");

    fibonacci();
    leibnizPi();
    primeFactorization();
}
