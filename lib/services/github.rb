require "net/https"
require "uri"
require "json"

module Services
  class Github
    GITHUB_API_URL = "https://api.github.com/"

    def self.request(username)
      uri  = URI.parse(GITHUB_API_URL)
      http = Net::HTTP.new(uri.host, uri.port)

      http.use_ssl = true
      http.verify_mode = OpenSSL::SSL::VERIFY_NONE

      request = Net::HTTP::Get.new("/users/#{username}",{
        "Content-Type" => "application/json", 
      })

      response = http.request(request).body
      JSON.parse response
      
      rescue Exception => error
        return error
    end
  end
end