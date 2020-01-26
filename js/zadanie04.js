// Zadanie 1.
 result = document.getElementsByClassName("sample_class");

function getTagsOfElements(elements) {
    var tags = [];

    elements = Array.from(elements);
    elements.forEach((x) => {
        tags.push(x.tagName);
    });

    return tags;
}

console.log(getTagsOfElements(result));

// Zadanie 2.
sampleIdElement = document.getElementById("sample_id");

function getClassesOfElement(element) {
    return Array.from(element.classList);
}

console.log(getClassesOfElement(sampleIdElement));

// Zadanie 3.
ex3 = document.querySelectorAll(".sample_class_2 li");

function getInnerTextsOfElements(elements) {
    var result = [];

    elements.forEach((x) => {
        result.push(x.textContent);
    });

    return result;
}

console.log(getInnerTextsOfElements(ex3));

// Zadanie 4.
links = document.getElementsByTagName("a");

function getAddressesOfElements(elements) {
    var result = [];

    Array.from(elements).forEach(x => {
        if (x.getAttribute("href") != null) {
          result.push(x.getAttribute("href"));
        }
    });

    return result;
}

getAddressesOfElements(links);

// Zadanie 5.
children = Array.from(document.getElementsByClassName("sample_class_3")[0].children);
console.log(getTagsOfElements(children));
