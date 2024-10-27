import { Palindrome, type Method } from "../src/Palindrome";

const palindromeWords = [
  "ada",
  "apa",
  "ara",
  "asa",
  "bab",
  "ini",
  "katak",
  "kodok",
  "makam",
  "malam",
  "radar",
  "taat",
  "tamat",
];

const unpalindromeWords = [
  "kata",
  "kabar",
  "perkataan",
  "sabda",
  "pesan",
  "janji",
  "istilah",
  "masa",
  "waktu",
  "kata",
  "sebutan",
  "hubungan",
  "cinta",
];

const palindromeSentences = [
  "Aku suka rajawali, bapak. Apabila wajar, aku suka.",
  "Kasur ini rusak.",
  "Kasur Nababan rusak.",
  "Kasur Koh Ahok rusak.",
  "Ibu Ratna antar ubi.",
  "Dia haid.",
  "Ria Irawan nawari air.",
  "Harum semar kayak rames murah.",
  "Tasupi dan Tika sama-sama sakit nadi pusat.",
  "Ira hamil lima hari.",
];

const unpalindromeSentences = [
  "76 tahun Indonesia merdeka.",
  "Budi membeli ikan.",
  "Tania pergi ke pasar.",
  "Joe Biden terpilih menjadi presiden Amerika Serikat.",
  "Gusti menendang bola.",
  "Ibuku seorang guru.",
  "Riana akan pulang besok pagi.",
  "TNI adalah singkatan dari Tentara Nasional Indonesia.",
  "Siska sedang memasak di dapur.",
  "Ia memuntus pergi dari rumah karena ia tidak kuat lagi melihat kelakuan ayahnya.",
];

const methods = ["reverse", "loop", "recursive"] satisfies Method[];

describe("palindrome", (): void => {
  it("can validate a palindrome word using reverse method", (): void => {
    palindromeWords.forEach((word) => {
      expect(new Palindrome(word).evaluateUsingReverse()).toBe(true);
    });
  });

  it("can validate a palindrome word using loop method", (): void => {
    palindromeWords.forEach((word) => {
      expect(new Palindrome(word).evaluateUsingLoop()).toBe(true);
    });
  });

  it("can validate a palindrome word using recursive method", (): void => {
    palindromeWords.forEach((word) => {
      expect(new Palindrome(word).evaluateUsingRecursive()).toBe(true);
    });
  });

  it("can validate a palindrome word using random method", (): void => {
    palindromeWords.forEach((word) => {
      expect(
        new Palindrome(word).evaluate(
          methods[Math.floor(Math.random() * methods.length)],
        ),
      ).toBe(true);
    });
  });

  it("can validate a palindrome sentence using reverse method", (): void => {
    palindromeSentences.forEach((sentence) => {
      expect(new Palindrome(sentence).evaluateUsingReverse()).toBe(true);
    });
  });

  it("can validate a palindrome sentence using loop method", (): void => {
    palindromeSentences.forEach((sentence) => {
      expect(new Palindrome(sentence).evaluateUsingLoop()).toBe(true);
    });
  });

  it("can validate a palindrome sentence using recursive method", (): void => {
    palindromeSentences.forEach((sentence) => {
      expect(new Palindrome(sentence).evaluateUsingRecursive()).toBe(true);
    });
  });

  it("can validate a palindrome sentence using random method", (): void => {
    palindromeSentences.forEach((sentence) => {
      expect(
        new Palindrome(sentence).evaluate(
          methods[Math.floor(Math.random() * methods.length)],
        ),
      ).toBe(true);
    });
  });

  it("can invalidate an unpalindrome word using reverse", (): void => {
    unpalindromeWords.forEach((word) => {
      expect(new Palindrome(word).evaluateUsingReverse()).toBe(false);
    });
  });

  it("can invalidate an unpalindrome word using loop", (): void => {
    unpalindromeWords.forEach((word) => {
      expect(new Palindrome(word).evaluateUsingLoop()).toBe(false);
    });
  });

  it("can invalidate an unpalindrome word using recursive", (): void => {
    unpalindromeWords.forEach((word) => {
      expect(new Palindrome(word).evaluateUsingRecursive()).toBe(false);
    });
  });

  it("can invalidate a unpalindrome word using random method", (): void => {
    unpalindromeWords.forEach((word) => {
      expect(
        new Palindrome(word).evaluate(
          methods[Math.floor(Math.random() * methods.length)],
        ),
      ).toBe(false);
    });
  });

  it("can invalidate an unpalindrome sentence using reverse", (): void => {
    unpalindromeSentences.forEach((sentence) => {
      expect(new Palindrome(sentence).evaluateUsingReverse()).toBe(false);
    });
  });

  it("can invalidate an unpalindrome sentence using loop", (): void => {
    unpalindromeSentences.forEach((sentence) => {
      expect(new Palindrome(sentence).evaluateUsingLoop()).toBe(false);
    });
  });

  it("can invalidate an unpalindrome sentence using recursive", (): void => {
    unpalindromeSentences.forEach((sentence) => {
      expect(new Palindrome(sentence).evaluateUsingRecursive()).toBe(false);
    });
  });

  it("can invalidate a unpalindrome sentence using random method", (): void => {
    unpalindromeSentences.forEach((sentence) => {
      expect(
        new Palindrome(sentence).evaluate(
          methods[Math.floor(Math.random() * methods.length)],
        ),
      ).toBe(false);
    });
  });

  it("throw an error if using unknown method", (): void => {
    // @ts-expect-error
    expect(() => new Palindrome("abcde").evaluate("abcde")).toThrow(TypeError);
  });
});
