# Project Notes

- Car Models sidebar entries filter products by exact token match against the product title. When a model's displayed "name code" would not appear verbatim in the product title, give the model an explicit `searchTerm` instead of renaming the product — the visible name must stay readable.
- Product photos are imported as real files from `src/assets`. CDN asset pointers (`.asset.json` / `/__l5e/assets-v1/...`) are not served by the sandbox dev server, which returns the SPA index.html for that path, so uploaded photos are copied into `src/assets`.
