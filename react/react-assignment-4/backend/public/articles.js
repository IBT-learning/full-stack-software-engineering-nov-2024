// Toggle create article form
const newArticleBtn = document.getElementById("newArticleBtn");
const createArticleForm = document.getElementById("createArticleForm");
const cancelFormBtn = document.getElementById("cancelFormBtn");
const articleForm = document.getElementById("articleForm");

const token = localStorage.getItem("userToken");
if (token) {
  document.addEventListener("DOMContentLoaded", async function () {
    if (newArticleBtn && createArticleForm) {
      newArticleBtn.addEventListener("click", () => {
        createArticleForm.classList.toggle("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    if (cancelFormBtn && articleForm && createArticleForm) {
      cancelFormBtn.addEventListener("click", () => {
        createArticleForm.classList.add("hidden");
        articleForm.reset();
        console.log("done");
      });
    }

    if (articleForm) {
      // Form submission
      articleForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Get form values
        const title = document.getElementById("title").value;
        // const author = document.getElementById("author").value;
        const description = document.getElementById("description").value;

        // console.log("New article:", { title, author, description });

        const userId = await localStorage.getItem("userToken");
        // console.log(userId);

        if (title.length > 45) {
          alert("Title is too long!");
        } else if (description.length > 150) {
          alert("Description is too long!");
        } else {
          try {
            const response = await fetch(
              `http://localhost:4000/posts/publish/${userId}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${userId}`, // Fixed typo here
                },
                body: JSON.stringify({
                  title: title,
                  description: description,
                  // fullName: author,
                }),
              },
            );

            const result = await response.json();
            console.log(result);

            if (response.ok) {
              // Show success message
              alert("Article created successfully!");
              console.log(response);

              // Reset form and hide it
              articleForm.reset();
              createArticleForm.classList.add("hidden");
            } else {
              alert(
                "Error creating article: " +
                  (result.message || "Unknown error"),
              );
            }
          } catch (error) {
            console.error("Error:", error);
            alert("Error creating article. Check console for details.");
          }
        }
      });

      try {
        const mainData = await fetch(`http://localhost:4000/posts/${token}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const res = await mainData.json();

        const authorBoxes = document.getElementsByClassName("author");
        const titleBoxes = document.getElementsByClassName("title");
        const descBoxes = document.getElementsByClassName("description");
        // console.log(authorboxes);
        const sortedData = res.length > 3 ? res.splice(0, 3) : res;

        for (let i = 0; i <= sortedData.length; i += 1) {
          authorBoxes[i].innerText = res[i].author;
          titleBoxes[i].innerText = res[i].title;
          descBoxes[i].innerText = res[i].description;
        }
      } catch (e) {
        console.log(e);
      }

      const deleteBoxes = document.getElementsByClassName("delete");
      // console.log(deleteBoxes.length);
      for (let i = 0; i < deleteBoxes.length; i++) {
        deleteBoxes[i].addEventListener("click", async () => {
          const title = prompt(
            "What is the title of the article you intend to delete?",
          );
          if (title) {
            try {
              const mainData = await fetch(
                `http://localhost:4000/posts/${title}`,
                {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                },
              );
              const res = await mainData.json();

              if (res.deletedCount === 0) {
                alert("This post does not belong to you");
              } else {
                alert("Post deleted successfully!");
              }
            } catch (err) {
              console.log(err);
            }
          } else {
            alert("Please input a correct title!");
          }
        });
      }
    }

    //   try {
    //     const mainData = await fetch(`http://localhost:4000/posts/${token}`, {
    //       method: "DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     const res = await mainData.json();
    //     console.log(res);
    //   } catch (err) {}
    //   console.log(err);
    // }
  });
}
