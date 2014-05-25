module CNAME
  class Generator < Jekyll::Generator
    def generate(site)
      url = site.config['url']
      if url
        matches  = url.downcase.match(/^(https?:\/\/([a-z0-9\.]*))?(.*)$/)
        hostname = matches[2]
        baseurl  = matches[3]

        if hostname and baseurl == ""
          File.write(File.join(site.dest, 'CNAME'), hostname.downcase + "\n")
          site.keep_files << 'CNAME'

          puts "CNAME: #{hostname}"
        end
      end
    end
  end
end
