#include <stdio.h>

printf("Hello, world\n");

printf("\n\nhow many iterations of fibonacci to run? ");
int count;
scanf("%d", &count);

if (count == NULL || count < 1) {
	printf("invalid input, using default (20)")
}

int a, b, c = 0, 1, 1;
for (int i = 0; i < count; i++) {
	printf(c);
	c = a + b;
	a, b = c, b;
}

