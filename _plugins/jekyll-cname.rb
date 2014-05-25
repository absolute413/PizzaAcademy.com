module CNAME
  class Generator < Jekyll::Generator
    def generate(site)
      url     = site.config["url"]      || ""
      baseurl = site.config["baseurl"]  || ""

      if url and baseurl == ""
        host = url.downcase.match(/^https?:\/\/([a-z0-9\.]*)$/)[1]
        File.write(File.join(site.dest, "CNAME"), "#{host}\n")
        site.keep_files << "CNAME"

        puts "CNAME: #{host}"
      end

      site.config["url"] = url + baseurl
    end
  end
end
